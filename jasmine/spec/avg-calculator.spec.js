const { calculateAvg } = require("../../plain_javascript/avg-calculator");

xdescribe("AvgCalculator", () => {
  it("should return the average of all numbers given", () => {
    let testNumbers = [3, 4, 5];
    let avg = calculateAvg(testNumbers);
    expect(avg).toEqual(4);
  });
  it("should throw an 'Invalid Input' error when given invalid array", () => {
    expect(() => calculateAvg(null).toThrow(new Error("Invalid Input")));
  });
});
