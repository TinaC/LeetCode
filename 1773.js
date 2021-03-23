const getKeyIndex = function (ruleKey) {
  const map = new Map([
    ['type', 0],
    ['color', 1],
    ['name', 2],
  ]);
  return map.get(ruleKey);
};

const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  items.forEach((item) => {
    const index = getKeyIndex(ruleKey);
    if (item[index] === ruleValue) count += 1;
  });

  return count;
};
