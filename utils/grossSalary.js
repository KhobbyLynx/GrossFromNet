// ** Utils
import {
  calculatePension,
  calculateTaxableIncome,
  calculatePAYETax,
  findBaseSalary,
} from './taxUtils.js'
import { formatNumber } from './utils.js'

// ** CALCULATE GROSS SALARY
export const calculateGrossSalary = (desiredNetSalary, allowances) => {
  let baseSalary = findBaseSalary(desiredNetSalary, allowances)

  // ** If base Salary is defined
  if (baseSalary) {
    // ** Calculate Employee Pension
    let employeePension = calculatePension(baseSalary)

    // ** Calcualte Taxable Income
    let taxableIncome = calculateTaxableIncome(
      baseSalary,
      allowances,
      employeePension
    )

    // ** Calcualte Tax
    let payeTax = calculatePAYETax(taxableIncome)

    // ** Calculate Gross Salary
    let grossSalary = formatNumber(
      baseSalary + allowances + employeePension + payeTax
    )

    // ** Calcuate Actual Net Salary Based on the Calculated Base Salary
    let netSalary = formatNumber(
      baseSalary - employeePension + allowances - payeTax
    )

    return {
      grossSalary,
      netSalary,
      desiredNetSalary: formatNumber(desiredNetSalary),
      allowances: formatNumber(allowances),
      baseSalary: formatNumber(baseSalary),
      taxableIncome: formatNumber(taxableIncome),
      payeTax: formatNumber(payeTax),
      employeePension: formatNumber(employeePension),
      employerPension: formatNumber((baseSalary * 18) / 100),
    }

    // ** If base salary is undefined
  } else {
    console.log('Base Salary could not be calculated')
  }
}
