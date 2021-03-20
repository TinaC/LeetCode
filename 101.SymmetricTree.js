const subTreeIsSymmetric = function(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;

  return (
    subTreeIsSymmetric(left.left, right.right) &&
    subTreeIsSymmetric(left.right, right.left)
  );
};

const isSymmetric = function(root) {
  return subTreeIsSymmetric(root.left, root.right);
};

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));
