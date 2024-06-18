const Employee = require("../models/employee.model");

const getEmployees = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 25,
      search,
      isAssigned,
      employeeType,
    } = req.query;

    if (![25, 50, 100].includes(parseInt(limit))) {
      return res.status(400).json({
        success: false,
        message: "Page limit should be 25, 50, or 100",
      });
    }

    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { team: { $regex: search, $options: "i" } },
      ];
    }

    if (isAssigned !== "null") {
      query.isAssigned = isAssigned === "true";
    }

    if (employeeType !== "null") {
      query.type = { $regex: employeeType, $options: "i" };
    }

    const totalEmployees = await Employee.countDocuments(query);
    const totalPages = Math.ceil(totalEmployees / parseInt(limit));

    const employees = await Employee.find(query)
      .skip(startIndex)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      totalPages: totalPages,
      employees: employees,
    });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getEmployeeByID = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }
    res.status(200).json({ success: true, employee: employee });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
module.exports = {
  getEmployees,
  getEmployeeByID,
};
