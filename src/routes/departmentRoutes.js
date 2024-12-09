const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.get('/', departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartmentById);
router.post('/', departmentController.createDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
