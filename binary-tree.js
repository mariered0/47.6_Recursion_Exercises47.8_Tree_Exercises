/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0;
    let toVisitQueue = [this.root]
    let res = 0;
    while(toVisitQueue.length){
      let current = toVisitQueue.shift();

      if(current.left){
       toVisitQueue.push(current.left);
        res += 1
      }
      if(current.right){
          toVisitQueue.push(current.right);
          res += 1
      }
      if (current.left === null || current.right === null) return res;
    }

    /** Springboard solution that uses recursion 
    if there's no node in the root return 0.
    if there's both node.left and node.right are null, it means there's only root, so return 1.
    if node.left is null, check the right one and add the one for root (+1). 
    if node.right is null, check the left one and add the one for root (+1).
    */
    // if (!this.root) return 0;
    
    // function minDepthHelper(node){
    //   if (node.left === null && node.right === null) return 1;
    //   if(node.left === null) return minDepthHelper(node.right) + 1;
    //   if(node.right === null) return minDepthHelper(node.left) + 1;
    //   return (Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1);
    // }
    // return minDepthHelper(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;
    let toVisitStack = [this.root]
    let res = []
    let count = 0;
    while(toVisitStack.length){
      let current = toVisitStack.pop();

      if(current.left){
       toVisitStack.push(current.left);
        count += 1
      }
      if(current.right){
          toVisitStack.push(current.right);
          count += 1
      }
      if (current.left === null && current.right === null){
        res.push(count);
        count = 0;
      } 
    }
    return Math.max(...res);


    /** Springboard solution that uses recursion
     */
    // if (!this.root) return 0;

    // function maxDepthHelper(node){
    //   if (node.left === null && node.right === null) return 1;
    //   if (node.left === null) return maxDepthHelper(node.right) + 1;
    //   if (node.right === null) return maxDepthHelper(node.left) + 1;
    //   return (Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1);
    // }
    // return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */


  //i don't understand why it is not correct...

  maxSum() {
    // if (this.root === null) return 0;
    // let toVisitStack = [this.root]
    // let count = 0;
    // while(toVisitStack.length){
    //   let current = toVisitStack.pop();
    //   count += current.val;

    //   if(current.left){
    //    toVisitStack.push(current.left);
    //   }
    //   if(current.right){
    //       toVisitStack.push(current.right);
    //   }
    // }
    // return count;

    /** Springboard solution:
     * 
     */
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;
    let toVisitStack = [this.root]
    let res = [];
    while(toVisitStack.length){
      let current = toVisitStack.shift();
      if(current.val > lowerBound) res.push(current.val);

      if(current.left){
        toVisitStack.push(current.left);
       }
       if(current.right){
           toVisitStack.push(current.right);
       }
    }
    if(res.length === 1 && res[0] === lowerBound || !res.length) return null;
    return Math.min(...res);

    /**Springboard solution */
    // if (!this.root) return null;

    // let queue = [this.root];
    // let closest = null;

    // while (queue.length) {
    //   let currentNode = queue.shift();
    //   let currentVal = currentNode.val;
    //   let higherThanLowerBound = currentVal > lowerBound;
    //   let shouldReassignClosest = currentVal < closest || closest === null;

    //   if (higherThanLowerBound && shouldReassignClosest) {
    //     closest = currentVal;
    //   }

    //   if (currentNode.left) queue.push(currentNode.left);
    //   if (currentNode.right) queue.push(currentNode.right);
    // }

    // return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
