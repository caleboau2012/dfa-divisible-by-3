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
 * @param {*} num
 */
const isDivisible = (num) => {
  num = Math.floor(num);
  if (num < 0) {
    num = -num;
  }
  let state = 0;
  num = getBinaryRepresentation(num);

  for (let i = 0; i < num.length; i++) {
    state = table[state][num[i]];
  }

  return state;
};

/**
 * This helper method returns the binary representation of the number
 * @param {*} num
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
