// ** FORMAT NUMBER
const formatNumber = (num) => {
  // ** Convert to number
  num = parseFloat(num)

  // ** Check if num is a valid number
  if (isNaN(num)) {
    throw new TypeError('Number is not valid')
  }

  // ** Format the number to two decimal places and add commas
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

module.exports = {
  formatNumber,
}
