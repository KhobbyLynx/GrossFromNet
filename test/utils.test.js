// ** Functions imports

const {
  calculatePension,
  calculateTaxableIncome,
  calculatePAYETax,
  findBasicSalary,
} = require('../utils/taxUtils.js')

const { calculateGrossSalary } = require('../utils/grossSalary.js')

// ** Test Pension Function
describe('calculatePension', () => {
  test('calculates pension correctly', () => {
    expect(calculatePension(5000)).toBeCloseTo(5000 * 0.105)
  })
})

// ** Test Taxable Income Function
describe('calculateTaxableIncome', () => {
  test('calculates taxable income correctly', () => {
    expect(calculateTaxableIncome(60000, 5000)).toBe(60000 + 5000)
  })
})

// ** Test PAYE Tax Function
describe('calculatePAYETax', () => {
  test('calculates PAYE tax correctly', () => {
    expect(calculatePAYETax(490)).toBe(0)
    expect(calculatePAYETax(600)).toBeCloseTo((600 - 490) * 0.05)
  })
})

// ** Test Basic Salary Function
describe('findBasicSalary', () => {
  test('finds basic salary correctly', () => {
    expect(findBasicSalary(1000, 200)).toBeCloseTo(1037.15)
  })
})

// ** Test Gross Salary Function
describe('calculateGrossSalary', () => {
  test('calculates gross salary correctly', () => {
    const desiredNetSalary = 1000
    const allowances = 200

    const result = calculateGrossSalary(desiredNetSalary, allowances)

    // ** expected output properties
    expect(result).toHaveProperty('grossSalary')
    expect(result).toHaveProperty('netSalary')
    expect(result).toHaveProperty('allowances', '200.00')
    expect(result).toHaveProperty('basicSalary', '1,037.15')
    expect(result).toHaveProperty('taxableIncome')
    expect(result).toHaveProperty('payeTax')
    expect(result).toHaveProperty('employeePension')
    expect(result).toHaveProperty('employerPension')
  })
})
