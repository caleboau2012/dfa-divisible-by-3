/**
 * Truth table
 */
const table = [
  [0, 1],
  [2, 0],
  [1, 2],
];

/**
 * Main function of DFA that accepts the number
 * Note that the ideal input to the DFA is a binary representation.
 * Doing the computation here for convenience of dealing with decimal values. Can be easily changed.
 * @param {Number} num
 */
const isDivisible = (num) => {
  num = Math.floor(num);
  if (num < 0) {
    num = -num;
  }
  let state = 0;
  num = getBinaryRepresentation(num); // this is the real input to the DFA. Using this for convenience

  for (let i = 0; i < num.length; i++) {
    state = table[state][num[i]];
  }

  return state;
};

/**
 * This helper method returns the binary representation of the number
 * @param {Number} num
 */
const getBinaryRepresentation = (num) => {
  let no = [];

  while (num > 0) {
    no.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  return no;
};

exports.isDivisible = isDivisible;
exports.getBinaryRepresentation = getBinaryRepresentation;
