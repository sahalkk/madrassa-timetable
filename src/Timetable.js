// Timetable.js
import React, { useState, useEffect } from "react";

import fetchData from "./Api";

const Timetable = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      let colsArray = data.table.cols.map((item) => item.label);
      let rowsArray = data.table.rows.map((item, index) => {
        return {
          day: index % 2 == 0 ? item?.c[0]?.v : "",
          class:
            index % 2 == 0
              ? item?.c[1]?.v
              : data.table.rows[index - 1]?.c[1]?.v,
          period1: item?.c[2]?.v,
          period2: item?.c[3]?.v,
        };
      });
      let classesArray = data.table.rows.map((item, index) => {
        return index % 2 == 0
          ? item?.c[1]?.v
          : data.table.rows[index - 1]?.c[1]?.v;
      });
      setCols(colsArray);
      setRows(rowsArray);
      setFilteredData(rowsArray);
      setClasses([...new Set(classesArray)]);
    });
  }, []);

  const findKey = (item) => {
    switch (item) {
      case "Day":
        return "day";
      case "Grade":
        return "grade";
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
      <nav className="flex flex-col lg:flex-row items-center navbar bg-gray-900 p-4">
        <div className="flex border-b-2 lg:w-64 lg:flex-col lg:border-r-2 lg:border-b-0">
          <div className="text-white font-bold md:text-xl lg:text-2xl">
            SALSABEEL
          </div>
          <div className="text-red-500 font-semibold ms-1 lg:ms-0 md:text-xl lg:text-2xl whitespace-nowrap ">
            ONLINE MADRASSA
          </div>
        </div>
        <div className="flex items-center ms-4 text-white font-normal text-base md:text-xl">
          BANGALORE, KARNATAKA
        </div>
      </nav>
      <div className="flex-grow flex justify-center bg-gray-100 md:items-center">
        <div className="flex flex-col items-center md:text-lg lg:text-xl">
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
          {selectedValue ? (
            <>
              <div className="flex items-center mt-4">
                Class {selectedValue} TimeTable
              </div>
              <table
                className="table-auto mt-2 md:mt-6"
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    {cols
                      ? cols.map((item, index) => (
                          <>
                            {!(item == "Grade" || item == "Class") ? (
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
                            ) : (
                              ""
                            )}
                          </>
                        ))
                      : null}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((rowItem) => (
                    <tr key={rowItem.id}>
                      {cols
                        ? cols.map((item, index) =>
                            item != "Grade" && item != "Class" ? (
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
                            ) : (
                              ""
                            )
                          )
                        : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div className="mt-4">No Class Selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
