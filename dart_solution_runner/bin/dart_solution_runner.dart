import 'package:dart_solution_runner/majority_element.dart' as majority_element;

void main(List<String> arguments) {
  const List<List<int>> testCases = [
    [2, 2, 1, 1, 1, 2, 2],
    [3,2,3],
    [1],
    [1,1]
  ];

  testCases.asMap().entries.forEach((entry) => {
        print('Running test case ${entry.key}.\nInput: ${entry.value}'),
        print(
            'Output: ${majority_element.Solution().majorityElement(entry.value)}'),
        print("____________________________________________________________")
      });
}
