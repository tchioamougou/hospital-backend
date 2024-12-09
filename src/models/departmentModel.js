const db = require('../config/db');

const Department = {
    getAllDepartments: (callback) => {
        const query = `SELECT * FROM Departments`;
        db.all(query, [], callback);
    },

    getDepartmentById: (id, callback) => {
        const query = `SELECT * FROM Departments WHERE id = ?`;
        db.get(query, [id], callback);
    },

    createDepartment: (data, callback) => {
        const query = `INSERT INTO Departments (name, department_head,) VALUES (?, ?)`;
        db.run(query, [data.name, data.department_head], function (err) {
            callback(err, { id: this.lastID });
        });
    },

    deleteDepartment: (id, callback) => {
        const query = `DELETE FROM Departments WHERE id = ?`;
        db.run(query, [id], callback);
    }
};

module.exports = Department;
