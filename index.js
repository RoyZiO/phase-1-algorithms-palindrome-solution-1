function isPalindrome(word) {
  // Write your algorithm here

  if(word.length < 2) 
  
  return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true
}
/* 
  Add your pseudocode here

  The code intitialized a loop through the string
  Checks to see if the element at the end is not equal to element at the beginning
  If elements are not similar, then return false
  else return true
  increment at the beginning of the word
  Decrement at the end of the word
*/

/*
  Add written explanation of your solution here
  
  A palindrome is a word or phase that reads the same forwards as backwards.
  Therefore, I created a function that allows the user to input a word. 
  This function checks whether the length of the words is less than two letters, returning true as one letter words and empty strings are palindromes
  Therefore, I returned true if the lenth of the word was less than two letters.
  For words greater or equal to two letters, I return false if the first letter is different from the last letter, otherwise, I return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
