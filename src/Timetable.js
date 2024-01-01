// Timetable.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Timetable = () => {
  const location = useLocation();
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
    if (location.state && rows.length > 0) {
      const { cols, selectedValue } = location.state;
      setCols(cols);
      setSelectedValue(selectedValue);

      let filteredRows = rows.filter((row) => row.class === selectedValue);
      setFilteredData(filteredRows);
    }
  }, [location.state, rows]);

  const findKey = (item) => {
    switch (item) {
      case "Day":
        return "day";
      case "Class":
        return "class";
      case "Period 1":
        return "period1";
      case "Period 2":
        return "period2";

      default:
        return "";
    }
  };

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    let filteredDataArray = rows.filter((item) => item.class == newValue);
    setFilteredData(filteredDataArray);
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
              {classes &&
                classes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
          <div>Class {selectedValue} TimeTable </div>
          {selectedValue && (
            <table
              className="table-auto mt-2 md:mt-6"
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              <thead>
                <tr>
                  {cols
                    ? cols.map((item, index) => (
                        <>
                          <th
                            key={index}
                            style={{
                              border: "1px solid black",
                              padding: "10px",
                              backgroundColor: "#9ca3af",
                            }}
                          >
                            {item}
                          </th>
                        </>
                      ))
                    : null}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((rowItem) => (
                  <tr key={rowItem.id}>
                    {cols
                      ? cols.map((item, index) => (
                          <td
                            key={index}
                            style={{
                              border: "1px solid black",
                              padding: "7px",
                              backgroundColor: "#e2e8f0",
                              fontSize: "14px",
                            }}
                          >
                            {rowItem[findKey(item)]}
                          </td>
                        ))
                      : null}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
