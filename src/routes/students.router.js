const express = require('express');
const { getStudents, postStudents, getStudentsGroupedByNationality, getStudentsGroupedByNationalitySort } = require('../controllers/students.controller');
const validateStudentData = require('../utils/validate');

const router = express.Router();

router.get("/get/students", getStudents)
router.get("/get/students/by/nationality", getStudentsGroupedByNationality)
router.get("/get/students/by/nationality/sort", getStudentsGroupedByNationalitySort)
router.post("/post/students", validateStudentData, postStudents)

module.exports = router
