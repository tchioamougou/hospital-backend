const departmentService = require('../services/departmentService');

const departmentController = {
    getAllDepartments: (req, res) => {
        departmentService.getAllDepartments((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(rows);
            }
        });
    },

    getDepartmentById: (req, res) => {
        const id = req.params.id;
        departmentService.getDepartmentById(id, (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!row) {
                res.status(404).json({ error: 'Department not found' });
            } else {
                res.json(row);
            }
        });
    },

    createDepartment: (req, res) => {
        const data = req.body;
        departmentService.createDepartment(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(result);
            }
        });
    },

    deleteDepartment: (req, res) => {
        const id = req.params.id;
        departmentService.deleteDepartment(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).send();
            }
        });
    }
};

module.exports = departmentController;
