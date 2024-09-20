const { isRestrictedHour } = require("../../../src/functions/isRestrictedHour")
const { restrictedHours } = require("../../../src/data/restrictions")

describe('Tests in IsRestrictedHour', () => {

  test('should be False', () => {

    const testTime = "20:18"
    tested = isRestrictedHour(testTime, restrictedHours)
    expect(tested).toBeFalsy();
  })

  test('should be True', () => {

    const testTime = "9:00"
    tested = isRestrictedHour(testTime, restrictedHours)
    expect(tested).toBeTruthy();
  })

});
