const db = require('../config/db');

const Patient = {
    getAllPatients: (callback) => {
        const query = 'SELECT * FROM Patients';
        db.all(query, [], callback);
    },

    getPatientById: (id, callback) => {
        const query = 'SELECT * FROM Patients WHERE id_patient = ?';
        db.get(query, [id], callback);
    },

    createPatient: (data, callback) => {
        const { nom, prenom, date_naissance, adresse, telephone } = data;
        const query = `
            INSERT INTO Patients (nom, prenom, date_naissance, adresse, telephone)
            VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [nom, prenom, date_naissance, adresse, telephone], function (err) {
            callback(err, { id: this.lastID });
        });
    },

    deletePatient: (id, callback) => {
        const query = 'DELETE FROM Patients WHERE id_patient = ?';
        db.run(query, [id], callback);
    }
};

module.exports = Patient;
