// ** CALCULATE EMPLOYEE PENSION
// ** Since tier1 is 0 for employee pension it is not included
const calculatePension = (taxableIncome) => {
  // ** Tier2 = 5.5%
  const tier2 = (taxableIncome * 5.5) / 100

  // ** Tier3 = 5%
  const tier3 = (taxableIncome * 5) / 100

  // ** Total Employess Pension
  const total = tier2 + tier3

  return total
}

// ** CALCULATE TAXABLE INCOME
// ** Employee Pension is taken from the basic Salary before allowances are added to be taxed
const calculateTaxableIncome = (basicSalary, allowances) => {
  return basicSalary + allowances
}

// ** CALCULATE PAYETAX
const calculatePAYETax = (taxableIncome) => {
  let tax = 0

  // ** For the first 490 tax rate = 0
  if (taxableIncome <= 490) {
    tax = 0

    // ** Next 110 tax rate = 5%
  } else if (taxableIncome <= 600) {
    tax = (taxableIncome - 490) * 0.05

    // ** Next 130 tax rate = 10%
  } else if (taxableIncome <= 730) {
    tax = 110 * 0.05 + (taxableIncome - 600) * 0.1

    // ** Next 3,166.67 tax rate = 17.5%
  } else if (taxableIncome <= 3896.67) {
    tax = 110 * 0.05 + 130 * 0.1 + (taxableIncome - 730) * 0.175

    // ** Next 16,000 tax rate = 25%
  } else if (taxableIncome <= 19896.67) {
    tax =
      110 * 0.05 +
      130 * 0.1 +
      3166.67 * 0.175 +
      (taxableIncome - 3896.67) * 0.25

    // ** Next 30,520 tax rate = 30%
  } else if (taxableIncome <= 50416.67) {
    tax =
      110 * 0.05 +
      130 * 0.1 +
      3166.67 * 0.175 +
      16000 * 0.25 +
      (taxableIncome - 19896.67) * 0.3

    // ** Above 50,000 tax rate = 35%
  } else {
    tax =
      110 * 0.05 +
      130 * 0.1 +
      3166.67 * 0.175 +
      16000 * 0.25 +
      30520 * 0.3 +
      (taxableIncome - 50000) * 0.35
  }
  return tax
}

// ** FIND THE BASIC SALARY
const findBasicSalary = (netSalary, allowances) => {
  let basicSalary = 0

  // ** Maximum number of iterations to prevent infinite loops
  const maxIterations = 1000

  // ** Precision level for the solution
  const epsilon = 0.001

  for (let i = 0; i < maxIterations; i++) {
    // ** Taxable Income (TI)= Basic Salary(B) - Employee Pension(P) + Allowances (A)
    // ** Tier 2 and Tier3 Employee Pension = 10.5%
    // ** Employee Pension(P) = 0.105 x B
    // ** TI = B - 0.105B + A
    // ** TI = B(1-0.105) + A
    // ** TI = 0.895B + A
    let taxableIncome = basicSalary + allowances

    // ** PayeTax
    let tax = calculatePAYETax(taxableIncome)

    // ** Pension
    let employeePension = calculatePension(taxableIncome)

    // ** Calculate Actual Net Salary
    let calculatedNetSalary = basicSalary + allowances - tax - employeePension

    // ** Return the basic salary when the calculated net salary is close enough to the provided net salary
    if (Math.abs(calculatedNetSalary - netSalary) < epsilon) {
      return Math.abs(basicSalary)
    }

    // ** Adjust the basic salary based on the difference between calculated and provided net salary for another iteration
    basicSalary += (netSalary - calculatedNetSalary) / 0.895
  }

  throw new Error(
    'Basic salary could not be determined within the iteration limit'
  )
}

// Exporting all functions as part of a module
module.exports = {
  calculatePension,
  calculateTaxableIncome,
  calculatePAYETax,
  findBasicSalary,
}
