import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOptions, setPageLimit } from "../app/features/employeeSlice";

const SearchComponent = () => {
  const { options } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const search_ = setTimeout(() => {
      dispatch(setOptions({ ...options, search: search }));
    }, 300);

    return () => clearTimeout(search_);
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleIsAssignedChange = (e) => {
    dispatch(setOptions({ ...options, isAssigned: e.target.value }));
  };

  const handleEmployeeTypeChange = (e) => {
    dispatch(setOptions({ ...options, employeeType: e.target.value }));
  };

  const handlePageSizeChange = (e) => {
    dispatch(setPageLimit(e.target.value));
  };

  return (
    <div className="mt-10 md:mt-20 w-full flex justify-center">
      <div className="w-[80%] flex flex-col justify-start">
        <h2 className="text-2xl md:text-3xl font-bold">
          Search employees in our company...
        </h2>
        <input
          type="text"
          placeholder="Search employees by their name, email, team name..."
          className="mt-5 border text-md md:text-lg px-5 rounded-lg active:outline-none focus:outline-none w-full h-10"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="relative w-fit">
            <select
              name="projectAssigned"
              id="project_assigned"
              className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
              value={options.isAssigned}
              onChange={handleIsAssignedChange}
            >
              <option value="null" disabled>
                Project Assigned
              </option>
              <option value="true">Assigned</option>
              <option value="false">Not Assigned</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current h-4 w-8 absolute right-0 top-0 bottom-0 m-auto text-black/70 pointer-events-none"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </div>
          <div className="relative w-fit">
            <select
              name="employeeType"
              id="employee_type"
              className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
              value={options.employeeType}
              onChange={handleEmployeeTypeChange}
            >
              <option value="null" disabled>
                Employee Type
              </option>
              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current h-4 w-8 absolute right-0 top-0 bottom-0 m-auto text-black/70 pointer-events-none"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </div>
          <div className="relative w-fit">
            <select
              name="pageSize"
              id="page_size"
              className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
              value={options.pageLimit}
              onChange={handlePageSizeChange}
            >
              <option value="null" disabled>
                Page Size
              </option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current h-4 w-8 absolute right-0 top-0 bottom-0 m-auto text-black/70 pointer-events-none"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
