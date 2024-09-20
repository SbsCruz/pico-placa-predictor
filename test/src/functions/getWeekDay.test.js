const { getWeekDay } = require("../../../src/functions//getWeekDay")

describe('Tests in IsRestrictedHour', () => {

  test('should not be null', () => {
    const dateTest = "13/09/2023"

    tested = getWeekDay(dateTest)
    expect(tested).not.toBeNull()
  })

  test('should be NaN', () => {
    const dateTest = "13-09-2023"

    tested = getWeekDay(dateTest)
    expect(tested).toBeNaN()
  })

});