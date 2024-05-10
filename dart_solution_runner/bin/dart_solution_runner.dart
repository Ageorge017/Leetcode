import 'package:dart_solution_runner/majority_element.dart' as majority_element;

void main(List<String> arguments) {
  const List<List<int>> testCases = [
    [2, 2, 1, 1, 1, 2, 2],
    [3, 2, 3],
    [1],
    [1, 1]
  ];

  testCases.asMap().entries.forEach((entry) => {
        print('Running test case ${entry.key}.\nInput: ${entry.value}'),
        print(
            'Output: ${majority_element.Solution().majorityElement(entry.value)}'),
        print("____________________________________________________________")
      });
}

/* 

TODO: typescript equivalent: 
  1. create and index file at the root of the libs that has the Solution class
  2. create MajorityElement and StringToInt classes 
  3. extend solution to all the classes
  4. small change  to the main dart file

*/