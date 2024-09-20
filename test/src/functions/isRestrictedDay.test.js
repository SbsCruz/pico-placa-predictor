const { isRestrictedDay } = require("../../../src/functions/isRestrictedDay")
const { restrictedDays } = require("../../../src/data/restrictions")

describe('Tests in IsRestrictedHour', () => {

  test('should be Undefined', () => {
    const digitTest = 0
    const day = 0

    tested = isRestrictedDay(digitTest, day, restrictedDays)
    expect(tested).toBeUndefined();
  })

  test('should be Truth', () => {
    const digitTest = 0
    const day = 5

    tested = isRestrictedDay(digitTest, day, restrictedDays)
    expect(tested).toBeTruthy();
  })

  test('should be False', () => {
    const digitTest = 5
    const day = 5

    tested = isRestrictedDay(digitTest, day, restrictedDays)
    expect(tested).toBeFalsy();
  })


});