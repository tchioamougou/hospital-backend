const Department = require('../models/departmentModel');

const departmentService = {
    getAllDepartments: (callback) => Department.getAllDepartments(callback),
    getDepartmentById: (id, callback) => Department.getDepartmentById(id, callback),
    createDepartment: (data, callback) => Department.createDepartment(data, callback),
    deleteDepartment: (id, callback) => Department.deleteDepartment(id, callback),
};

module.exports = departmentService;
