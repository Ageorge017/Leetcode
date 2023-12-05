class Solution {
  int majorityElement(List<int> nums) {
    final double majorityThreshold = nums.length / 2;
    int currentMajorityCount = 1;

    List<int> sortedNums = nums.toList();
    sortedNums.sort();

    for (int i = 1; i < sortedNums.length; i++) {
      if (sortedNums[i] == sortedNums[i - 1]) {
        currentMajorityCount++;
        if (currentMajorityCount > majorityThreshold) {
          return sortedNums[i];
        }
      } else {
        currentMajorityCount = 1;
      }
    }

    return sortedNums[0];
  }
}
