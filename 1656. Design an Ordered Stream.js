const OrderedStream = function f(n) {
  this.stream = new Map();
  this.pointer = 0;
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
    const next = idKey + 1;
    
    while (this.stream.has(next)) {
      result.push(this.stream.get(next));
      this.pointer = next;
    }
  }
  return result;
};

const obj = new OrderedStream(5);
console.log(obj.insert(3, 'ccccc'));
console.log(obj.insert(1, 'aaaaa'));
console.log(obj.insert(2, 'bbbbb'));
console.log(obj.insert(5, 'eeeee'));
console.log(obj.insert(4, 'ddddd'));
