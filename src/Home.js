import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <nav className="navbar bg-gray-900 p-4">
        <div className="text-white font-bold md:text-xl lg:text-2xl">
          XYZ MADRASSA
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
