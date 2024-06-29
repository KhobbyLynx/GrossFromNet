import express from 'express'
import { calculateSalary } from '../controllers/salary.controller.js'

const router = express.Router()

router.post('/calculate', calculateSalary)

export default router
