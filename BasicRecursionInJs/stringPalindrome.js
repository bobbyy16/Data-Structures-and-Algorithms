// iteration

// function reverseString(str) {
//   let reverse = "";
//   let og = str;
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i]; //take the last index element and add it other variable
//   }
//   if (og === reverse) {
//     return 1;
//   } else return -1;
// }

// console.log(reverseString("abhishek"));

// recursion

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    //compare 1st and last element
    return false;
  }
  // Recursive call to check if the substring without the first and last characters is a palindrome
  return isPalindrome(str.slice(1, -1));
}

let str1 = "racecar";
console.log(isPalindrome(str1)); // Output: true

let str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
