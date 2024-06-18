import React from "react";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import EmployeeSection from "../components/EmployeeSection";
import { useSelector } from "react-redux";

const HomePage = () => {
  const loading = useSelector((state) => state.employee.loading);
  return (
    <div>
      <Navbar />
      {loading && (
        <div className="bg-black opacity-30 w-[100vw] h-[100vh] absolute top-0 left-0 z-30">
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white">Loading...</h1>
          </div>
        </div>
      )}
      <SearchComponent />
      <EmployeeSection />
    </div>
  );
};

export default HomePage;
