// ** Utils
const { calculateGrossSalary } = require('../utils/grossSalary.js')

const calculateSalary = async (req, res) => {
  try {
    const { desiredNetSalary, allowances } = req.body

    const inputNet = Number(desiredNetSalary)
    const inputAllowances = Number(allowances)
    const result = calculateGrossSalary(inputNet, inputAllowances)
    res.status(200).json(result)
  } catch (error) {
    console.error('Error calculating gross salary:', error)
    res.status(500).json({ error: `Error Calculating gross salary - ${error}` })
  }
}

module.exports = {
  calculateSalary,
}
