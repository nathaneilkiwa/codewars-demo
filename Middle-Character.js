// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// my solution 

function getMiddle(s) {
    //Code goes here!
    
      const length = s.length;
      const middle = Math.floor(length / 2);
  
      if (length % 2 === 0) {
          // If the string length is even, return the two middle characters
          return s.slice(middle - 1, middle + 1);
      } else {
          // If the string length is odd, return the middle character
          return s.charAt(middle);
      }
  
  }

  // 2nd solution 

  function getMiddle(s) {
   
      return s.slice((s.length-1)/2, s.length/2+1);
  }