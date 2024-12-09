const patientService = require('../services/patientService');

const patientController = {
    getAllPatients: (req, res) => {
        patientService.getAllPatients((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(rows);
            }
        });
    },

    getPatientById: (req, res) => {
        const id = req.params.id;
        patientService.getPatientById(id, (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!row) {
                res.status(404).json({ error: 'Patient non trouvé' });
            } else {
                res.json(row);
            }
        });
    },

    createPatient: (req, res) => {
        const data = req.body;
        patientService.createPatient(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(result);
            }
        });
    },

    deletePatient: (req, res) => {
        const id = req.params.id;
        patientService.deletePatient(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).send();
            }
        });
    }
};

module.exports = patientController;
