function isPalindrome(word) {
  // Split the word into an array, reverse the array and join it back into a string
  const reversedWord = word.split('').reverse().join('');

  // If the reversed word is the same as the original word, return true. Otherwise, return false
  return word === reversedWord;
}

/* 
  Pseudocode:
  - The function first splits the input word into an array of characters
  - It then reverses the array
  - After that, it joins the reversed array back into a string
  - Finally, it compares the reversed string with the original word. 
  - If they are the same, it means the word is a palindrome and the function returns true. 
  - If they are different, the word is not a palindrome and the function returns false
*/

/*
  Explanation of the solution:
  - The solution works by reversing the input word and comparing it with the original word
  - If the reversed word and the original word are the same, it means the word is a palindrome
  - The function implements this logic using the split, reverse, and join methods provided by JavaScript
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Adding more test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("openai"));
}

module.exports = isPalindrome;