const { isAllowed } = require("../src/predictor")

describe('Test for predictor file', () => {
  const testPlate = "ABC1289";
  const testDate = "15/09/2024";
  const testTime = "11:43";

  test('should be false', () => {
    tested = isAllowed(testPlate, testDate, testTime)

    expect(tested).toBeFalsy();
  });
})