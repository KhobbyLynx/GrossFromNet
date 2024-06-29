// ** Utils
const {
  calculatePension,
  calculateTaxableIncome,
  calculatePAYETax,
  findBasicSalary,
} = require('./taxUtils.js')
const { formatNumber } = require('./utils.js')

// ** CALCULATE GROSS SALARY
const calculateGrossSalary = (desiredNetSalary, allowances) => {
  let basicSalary = findBasicSalary(desiredNetSalary, allowances)

  // ** If basic Salary is defined
  if (basicSalary) {
    // ** Calculate Taxable Income
    let taxableIncome = calculateTaxableIncome(basicSalary, allowances)

    // ** Calculate Employee Pension
    let employeePension = calculatePension(taxableIncome)

    // ** Calculate Tax
    let payeTax = calculatePAYETax(taxableIncome)

    // ** Calculate Gross Salary
    let grossSalary = formatNumber(basicSalary + allowances)

    // ** Calculate Actual Net Salary Based on the Calculated Basic Salary
    let netSalary = formatNumber(
      basicSalary + allowances - employeePension - payeTax
    )

    return {
      grossSalary,
      netSalary,
      allowances: formatNumber(allowances),
      basicSalary: formatNumber(basicSalary),
      taxableIncome: formatNumber(taxableIncome),
      payeTax: formatNumber(payeTax),
      employeePension: formatNumber(employeePension),
      // ** Employer Total Pension rate is 18%
      employerPension: formatNumber(taxableIncome * 0.18),
    }

    // ** If basic salary is undefined
  } else {
    console.log('Basic Salary could not be calculated')
    throw new Error()
  }
}

module.exports = {
  calculateGrossSalary,
}
