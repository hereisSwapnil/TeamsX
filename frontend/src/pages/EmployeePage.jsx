import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import EmployeeDetail from "../components/EmployeeDetail";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../app/features/employeeSlice";

const EmployeePage = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.employee.loading);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    dispatch(setLoading(true));
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/employee/${id}`)
      .then((response) => {
        setEmployeeData(response.data.employee);
        dispatch(setLoading(false));
      })
      .catch((error) => {
        setEmployeeData(null);
        console.error("Error: ", error.message);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
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
      <div className="mt-10 md:mt-20 w-full flex justify-center mb-10">
        <div className="w-[80%] flex flex-col">
          <Link to={"/"} className="text-blue-500 text-lg mt-5">
            Home
          </Link>
        </div>
      </div>

      {employeeData ? (
        <EmployeeDetail
          name={employeeData.name}
          email={employeeData.email}
          isAssigned={employeeData.isAssigned}
          position={employeeData.position}
          team={employeeData.team}
          profilePicture={employeeData.profilePicture}
          description={employeeData.about}
        />
      ) : (
        <h1 className="text-2xl font-bold text-gray-500 text-center mt-20">
          Employee not found
        </h1>
      )}
    </div>
  );
};

export default EmployeePage;
