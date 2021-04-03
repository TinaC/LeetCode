/**
 * @param {number} n
 */
const OrderedStream = function f(n) {
  this.stream = new Map();
  this.pointer = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function f(idKey, value) {
  this.stream.set(idKey, value);
  const result = [];

  if (idKey === this.pointer) {
    result.push(value);
    this.pointer++;
    let i = idKey + 1;
    while (this.stream.has(i)) {
      result.push(this.stream.get(i));
      i++;
      this.pointer++;
    }
  }
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
