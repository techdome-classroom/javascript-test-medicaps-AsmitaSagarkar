function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0) {
          nums[i] = n + 1;
      }
  }

  for (let i = 0; i < n; i++) {
      const index = Math.abs(nums[i]);
      if (index <= n) {
          nums[index - 1] = -Math.abs(nums[index - 1]);
      }
  }

  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }

  return n + 1;
}

module.exports = smallestMissingPositiveInteger;

