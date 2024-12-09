const Service = require('../models/serviceModel');

const serviceService = {
    getAllServices: (callback) => Service.getAllServices(callback),
    getServiceById: (id, callback) => Service.getServiceById(id, callback),
    createService: (data, callback) => Service.createService(data, callback),
    deleteService: (id, callback) => Service.deleteService(id, callback),
};

module.exports = serviceService;
