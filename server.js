// ** express import
import express from 'express'

// ** Port
const PORT = process.env.PORT || 5000

// ** Salary Route
import salaryRoute from './routes/salary.route.js'

// ** Initialize app
const app = express()

// ** parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }))

// ** /api/salary route
app.use('/api/salary', salaryRoute)

// ** test get request
app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Calculate Gross Salary',
  })
})

// ** start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`)
})
