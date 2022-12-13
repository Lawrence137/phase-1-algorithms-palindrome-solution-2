function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

   iterate from the beginning of the string to the middle of the string
   compare the letter we're iterating over to the corresponding letter at the end of the string
   if the letters don't match, return false
   if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here

  I used a for loop that iterates the first half of the word in question and called it i.
   j iterates the second half of the string. After comparison if the letters from both halves don't match,
   it returns false.
   If we reach the middle and the letters match, return true.
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
