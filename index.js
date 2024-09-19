const { isAllowed } = require('./src/predictor')


const plateExample = "abc1230"
const dateExample = "20/09/2024"
const hourExample = "18:01"


console.log(isAllowed(plateExample, dateExample, hourExample))
