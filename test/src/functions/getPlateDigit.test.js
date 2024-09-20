const { getPlateDigit } = require("../../../src/functions/getPlateDigit")

describe('Tests in getPlateDigit', () => {

  test('should not be NaN', () => {
    const plateTest = "ABC-1234"

    tested = getPlateDigit(plateTest)
    expect(tested).not.toBeNaN()
  })

  test('should not be 6', () => {
    const plateTest = "ABC-1236"

    tested = getPlateDigit(plateTest)
    expect(tested).toBe(6)
  })


});