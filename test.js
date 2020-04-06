var assert = require("assert");
var dfa = require("./index");

describe("isDivisible", function () {
  it("should return 0 when the number is divisible by 3", function () {
    assert.equal(0, dfa.isDivisible(6));
    assert.equal(0, dfa.isDivisible(-6));
  });

  it("should handle edge cases", function () {
    assert.equal(0, dfa.isDivisible(0));
    assert.equal(1, dfa.isDivisible(Number.MAX_SAFE_INTEGER));
    assert.equal(1, dfa.isDivisible(Number.MIN_SAFE_INTEGER));
    assert.equal(2, dfa.isDivisible(Number.MAX_VALUE));
    assert.equal(0, dfa.isDivisible(Number.MIN_VALUE));
  });

  it("should return 1 when the remainder is 1", function () {
    assert.equal(1, dfa.isDivisible(4));
    assert.equal(1, dfa.isDivisible(-4));
  });

  it("should return 2 when the remainder is 2", function () {
    assert.equal(2, dfa.isDivisible(5));
    assert.equal(2, dfa.isDivisible(-5));
  });
});

describe("getBinaryRepresentation", function () {
  it("should return the binary representation of a number", function () {
    assert.deepEqual([1, 0, 0], dfa.getBinaryRepresentation(4));
  });

  it("most significant digit is always 1", function () {
    assert.equal(1, dfa.getBinaryRepresentation(15237).shift());
  });

  it("least significant digit is always 0 when number is even", function () {
    assert.equal(0, dfa.getBinaryRepresentation(4).pop());
    assert.notEqual(0, dfa.getBinaryRepresentation(3).pop());
  });

  it("least significant digit is always 1 when number is odd", function () {
    assert.equal(1, dfa.getBinaryRepresentation(3).pop());
    assert.notEqual(1, dfa.getBinaryRepresentation(4).pop());
  });
});
