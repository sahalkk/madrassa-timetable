import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timetable from "./Timetable";

const Home = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [classes, setClasses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let SHEET_ID = "1cYBL-8HTymg53opj6Y5T2_UIIC4ELlHUCvMz4TzPF9E";
    let SHEET_TITLE = "Sheet1";
    let SHEET_RANGE = "A1:D73";
    let FULL_URL =
      "https://docs.google.com/spreadsheets/d/" +
      SHEET_ID +
      "/gviz/tq?sheet=" +
      SHEET_TITLE +
      "&range=" +
      SHEET_RANGE;

    fetch(FULL_URL)
      .then((res) => res.text())
      .then((rep) => {
        console.log("aa");
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        console.log({ data });

        let colsArray = data.table.cols.map((item) => item.label);
        let rowsArray = data.table.rows.map((item, index) => {
          return {
            day: index % 2 == 0 ? item?.c[0]?.v : "",
            class:
              (index % 2 == 0
                ? item?.c[1]?.v
                : data.table.rows[index - 1]?.c[1]?.v) || "Pre-2",
            period1: item?.c[2]?.v,
            period2: item?.c[3]?.v,
          };
        });
        let classesArray = data.table.rows.map((item, index) => {
          return (
            (index % 2 == 0
              ? item?.c[1]?.v
              : data.table.rows[index - 1]?.c[1]?.v) || "Pre-2"
          );
        });
        setCols(colsArray);
        setRows(rowsArray);
        setFilteredData(rowsArray);
        setClasses([...new Set(classesArray)]);
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  }, []);

  useEffect(() => {
    console.log({ rows });
    console.log({ cols });
    console.log({ classes });
  }, [rows, cols, classes]);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    let filteredDataArray = rows.filter((item) => item.class === newValue);
    setFilteredData(filteredDataArray);
    navigate("/timetable", {
      state: {
        cols: cols,
        filteredData: filteredDataArray,
        selectedValue: newValue,
      },
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="navbar bg-gray-900 p-4">
        <div className="text-white font-bold md:text-xl lg:text-2xl">
          XYZ MADRASSA
        </div>
      </nav>
      <div className="flex-grow flex justify-center bg-gray-100 md:items-center">
        <div className="flex flex-col md:items-center md:text-lg lg:text-xl">
          <div className="flex justify-center mt-2 md:mb-6 space-x-4">
            <label htmlFor="dynamicDropdown">Select Class:</label>
            <select
              id="dynamicDropdown"
              className="rounded bg-white min-w-[100px] border md:min-w-[200px]"
              onChange={handleSelectChange}
              value={selectedValue}
            >
              <option value="" disabled></option>
              {classes.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {selectedValue && (
            <Timetable cols={cols} rows={rows} filteredData={filteredData} />
          )}
          {!selectedValue && (
            <div className="flex justify-center mt-2 md:mt-6">
              No Class Selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
