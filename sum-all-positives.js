
// You get an array of numbers, return the sum of all of the positives ones.


// Note
// If there is nothing to sum, the sum is default to 0.

function sumPositives(arr){
let sum = 0;    
  // setup loop to go through array of given length
for (i = 0; i < arr.length; i++) {    
// if arr[i] is greater than zero 
    if (arr[i] > 0) {  
// add arr[i] to total                    
      sum += arr[i];                  
    }
  }
  return sum;  
  }


  // 2nd solution 

  function sumPositives(arr){
    return arr.filter(x => x >=0).reduce((a,c) => a + c,0)
  }
   