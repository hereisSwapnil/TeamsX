import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  currentPage: 1,
  totalPages: 0,
  pageLimit: 25,
  options: {
    search: "",
    isAssigned: "null",
    employeeType: "null",
  },
  loading: false,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setPageLimit: (state, action) => {
      state.pageLimit = action.payload;
    },
    setOptions: (state, action) => {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setEmployees,
  setCurrentPage,
  setTotalPages,
  setPageLimit,
  setOptions,
  setLoading,
} = employeeSlice.actions;

export default employeeSlice.reducer;
