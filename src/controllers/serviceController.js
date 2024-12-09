const serviceService = require('../services/serviceService');

const serviceController = {
    getAllServices: (req, res) => {
        serviceService.getAllServices((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(rows);
            }
        });
    },

    getServiceById: (req, res) => {
        const id = req.params.id;
        serviceService.getServiceById(id, (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!row) {
                res.status(404).json({ error: 'Service not found' });
            } else {
                res.json(row);
            }
        });
    },

    createService: (req, res) => {
        const data = req.body;
        serviceService.createService(data, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(result);
            }
        });
    },

    deleteService: (req, res) => {
        const id = req.params.id;
        serviceService.deleteService(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).send();
            }
        });
    }
};

module.exports = serviceController;
