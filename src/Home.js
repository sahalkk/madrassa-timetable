import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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

      <div className="flex-grow flex justify-center bg-gray-100 items-center">
        <div className="flex flex-col items-center md:text-lg lg:text-xl">
          <button
            className="btn bg-gray-900 text-white p-2 rounded"
            onClick={() => navigate("/timetable")}
          >
            Go to Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
