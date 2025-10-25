export function reverseString(s: string[]): string[] {
   let left = 0;
   let right = s.length - 1;

   while (left < right) {
     // Swap elements at left and right indices
     const temp = s[left];
     s[left] = s[right];
     s[right] = temp;

     // Move pointers toward the center
     left++;
     right--;
   }
  return s;
}
