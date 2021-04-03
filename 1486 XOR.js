const xorOperation = function xor(n, start) {
  // const nums = [];
  let result = 0;
  for (let i = 0; i < n; i++) {
    result = result ^ (start + n * 2).toString(2);
    // nums.push(start + n * 2).toString(2);
  }
  return result;
};

var xorOperation = function (n, start) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    let binary = start + i * 2;
    result = result ^ binary;
  }

  return result;
};

var xorOperation = function (n, start) {
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor ^= start + 2 * i;
  }
  return xor;
};

var xorOperation = function(n, start) {
  return Array(n)
    .fill()
    .map((x, i) => start + 2 * i)
    .reduce((c, x) => c ^ x);
};