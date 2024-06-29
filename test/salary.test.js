// ** Jest imports
const request = require('supertest')
const express = require('express')
const salaryRoutes = require('../routes/salary.route.js')

const app = express()
app.use(express.json())
app.use('/api/salary', salaryRoutes)

describe('POST /api/salary/calculate', () => {
  it('should calculate the gross salary and other details', async () => {
    const res = await request(app)
      .post('/api/salary/calculate')
      .send({ desiredNetSalary: 1000, allowances: 200 })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('grossSalary')
    expect(res.body).toHaveProperty('basicSalary')
    expect(res.body).toHaveProperty('payeTax')
    expect(res.body).toHaveProperty('employeePension')
    expect(res.body).toHaveProperty('employerPension')
  })
})
