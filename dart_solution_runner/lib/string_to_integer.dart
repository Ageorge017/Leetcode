// Don't judge me. Trying to learn some Dart here lol

class Solution {
  int myAtoi(String s) {
    final String trimmedS = s.trim();
    String newString = "";

    for (int i = 0; i < trimmedS.length; i++) {
      if (i == 0) {
        if (trimmedS[i] == "+" ||
            trimmedS[i] == "-" ||
            int.tryParse(trimmedS[i]) != null) {
          newString += trimmedS[i];
        } else {
          return 0;
        }
      } else {
        if (int.tryParse(trimmedS[i]) != null) {
          newString += trimmedS[i];
        } else {
          return isInRange(BigInt.tryParse(newString) ?? BigInt.from(0));
        }
      }
    }

    return isInRange(BigInt.tryParse(newString) ?? BigInt.from(0));
  }

  int isInRange(BigInt num) {
    const int upperLimit = 2147483647;
    const int lowerLimit = -2147483648;

    return num < BigInt.from(lowerLimit)
        ? lowerLimit
        : num > BigInt.from(upperLimit)
            ? upperLimit
            : num.toInt();
  }
}
