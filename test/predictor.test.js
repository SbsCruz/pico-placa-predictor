const { isAllowed } = require("../src/predictor")

describe('Test for predictor file', () => {
  // examples for a false case
  const testPlate1 = "ABC1289";
  const testDate1 = "20/09/2024";
  const testTime1 = "17:00";

  // examples for a truth case
  const testPlate2 = "ABC1289";
  const testDate2= "20/09/2024";
  const testTime2= "12:00";

  test('should be false', () => {
    tested = isAllowed(testPlate1, testDate1, testTime1)

    expect(tested).toBeFalsy();
  });

  test('should be true', () => {
    tested = isAllowed(testPlate2, testDate2, testTime2)

    expect(tested).toBeTruthy();
  });


})