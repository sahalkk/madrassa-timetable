import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./App.css";
import ClassTable from "./ClassTable";

function ClassSelector() {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    navigate(`/class-timetable`);
  };

  return (
    <div className="flex flex-col md:items-center md:text-lg lg:text-xl">
      <div className="flex justify-center mt-2 md:mb-6 space-x-4">
        <span>Select Class:</span>
        <select
          className="rounded bg-white min-w-[100px] border md:min-w-[200px]"
          onChange={handleSelectChange}
        >
          <option value=""></option>
          <option value="1">1</option>
          <option value="Pre-2">Pre-2</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      {selectedValue && (
        <div className="flex justify-center font-bold mt-2">
          Class {selectedValue} TimeTable
        </div>
      )}
      <ClassTable classNumber={selectedValue} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <nav className="bg-blue-500 p-4">
          <div className="text-white font-bold md:text-xl lg:text-2xl">
            XYZ MADRASSA
          </div>
        </nav>
        <div className="flex-grow flex justify-center md:items-center">
          <ClassSelector />
        </div>
      </div>
    </Router>
  );
}

export default App;
