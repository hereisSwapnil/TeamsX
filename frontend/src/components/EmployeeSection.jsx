import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setEmployees,
  setLoading,
  setTotalPages,
} from "../app/features/employeeSlice";

const EmployeeSection = () => {
  const { employees, currentPage, totalPages, pageLimit, options } =
    useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageLimit, options]);

  const fetchEmployees = async () => {
    dispatch(setLoading(true));
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/employee?page=${currentPage}&limit=${pageLimit}${
          options.search ? `&search=${options.search}` : ""
        }${
          options.isAssigned !== null ? `&isAssigned=${options.isAssigned}` : ""
        }${options.employeeType ? `&employeeType=${options.employeeType}` : ""}`
      )
      .then((response) => {
        dispatch(setEmployees(response.data.employees));
        dispatch(setTotalPages(response.data.totalPages));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page.selected + 1));
  };

  return (
    <div className="mt-10 md:mt-20 w-full flex justify-between mb-5 flex-col items-center min-h-[55vh]">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-4 gap-10">
        {employees.length === 0 && (
          <div className="col-span-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-500">
              No employees found
            </h1>
          </div>
        )}
        {employees.map((employee) => (
          <EmployeeCard
            key={employee._id}
            profilePicture={employee.profilePicture}
            name={employee.name}
            position={employee.position}
            email={employee.email}
            teamName={employee.team}
            id={employee._id}
            isAssigned={employee.isAssigned}
            type={employee.type}
          />
        ))}
      </div>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        pageLinkClassName="pagination-link"
        containerClassName="pagination-container"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        activeClassName="active"
      />
    </div>
  );
};

export default EmployeeSection;
