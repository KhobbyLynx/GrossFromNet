// ** express import
const express = require('express')

// ** Controller
const { calculateSalary } = require('../controllers/salary.controller.js')

const router = express.Router()

// ** End Point /api/salary/calculate
// ** POST */
router.post('/calculate', calculateSalary)

module.exports = router
