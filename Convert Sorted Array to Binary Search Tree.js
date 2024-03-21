class TreeNode{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};

//Example usage:
const nums1 = [-10, -3, 0, 5, 9];
const nums2 = [1, 3];

console.log(sortedArrayToBST(nums1));
console.log(sortedArrayToBST(nums2));