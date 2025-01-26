const {add, sub, mul, div} = require("../app/calculator.js"); 
const { expect } = require("chai");
describe("Calculator Tests", () => {
  it("should return 7 for add(5, 2)", () => {
    expect(add(5, 2)).to.equal(7);
  });

  it("should fail for add(5, 2) to return 8", () => {
    expect(add(5, 2)).to.not.equal(8);
  });

  it("should return 3 for sub(5, 2)", () => {
    expect(sub(5, 2)).to.equal(3);
  });

  it("should fail for sub(5, 2) to return 5", () => {
    expect(sub(5, 2)).to.not.equal(5);
  });

  it("should return 10 for mul(5, 2)", () => {
    expect(mul(5, 2)).to.equal(10);
  });

  it("should fail for mul(5, 2) to return 12", () => {
    expect(mul(5, 2)).to.not.equal(12);
  });

  it("should return 5 for div(10, 2)", () => {
    expect(div(10, 2)).to.equal(5);
  });

  it("should fail for div(10, 2) to return 2", () => {
    expect(div(10, 2)).to.not.equal(2);
  });
});
