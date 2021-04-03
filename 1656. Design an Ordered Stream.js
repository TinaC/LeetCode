/**
 * @param {number} n
 */
const OrderedStream = function f(n) {
  this.stream = new Map();
  this.pointer = 1;
};

// https://leetcode.com/problems/design-an-ordered-stream/discuss/1078564/JavaScript-Elegant-solution-using-an-array-and-pointer-(with-explanation)

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function f(idKey, value) {
  this.stream.set(idKey, value);
  const result = [];

  // Each time we insert, we will check whether pointer has value
  // If pointer next has value, it must be the newly insert one
  while (this.stream.get(this.pointer)) {
    result.push(this.stream.get(this.pointer));
    this.pointer++;
  }

  //   if (idKey === this.pointer) {
  //     result.push(value);

  //     this.pointer++;
  //     let i = idKey + 1;
  //     while (this.stream.has(i)) {
  //       result.push(this.stream.get(i));
  //       i++;
  //       this.pointer++;
  //     }
  //   }
  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const obj = new OrderedStream(5);
console.log(obj.insert(3, 'ccccc'));
console.log(obj.insert(1, 'aaaaa'));
console.log(obj.insert(2, 'bbbbb'));
console.log(obj.insert(5, 'eeeee'));
console.log(obj.insert(4, 'ddddd'));
