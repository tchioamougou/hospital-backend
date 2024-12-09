const db = require('../config/db');

const Service = {
    getAllServices: (callback) => {
        const query = `SELECT * FROM Services`;
        db.all(query, [], callback);
    },

    getServiceById: (id, callback) => {
        const query = `SELECT * FROM Services WHERE id = ?`;
        db.get(query, [id], callback);
    },

    createService: (data, callback) => {
        const query = `INSERT INTO Services (name, department_id, service_head) VALUES (?, ?, ?)`;
        db.run(query, [data.name, data.department_id, data.service_head], function (err) {
            callback(err, { id: this.lastID });
        });
    },

    deleteService: (id, callback) => {
        const query = `DELETE FROM Services WHERE id = ?`;
        db.run(query, [id], callback);
    }
};

module.exports = Service;
