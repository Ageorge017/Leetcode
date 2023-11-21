import 'package:dart_solution_runner/string_to_integer.dart' as string_to_dart;

void main(List<String> arguments) {
  const List<String> testCases = [
    "42",
    "   -42",
    "4193 with words",
    "hello 4193 with words",
    "91283472332",
    "-91283472332",
    "+-12",
    "20000000000000000000"
  ];

  
  testCases.asMap().entries.forEach((entry) => {
    print('Running test case ${entry.key}.\nInput: ${entry.value}')
    ,print('Output: ${string_to_dart.Solution().myAtoi(entry.value)}')
    ,print("____________________________________________________________")
  });


}
