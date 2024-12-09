const Patient = require('../models/patientModel');

const patientService = {
    getAllPatients: (callback) => Patient.getAllPatients(callback),
    getPatientById: (id, callback) => Patient.getPatientById(id, callback),
    createPatient: (data, callback) => Patient.createPatient(data, callback),
    deletePatient: (id, callback) => Patient.deletePatient(id, callback),
};

module.exports = patientService;
