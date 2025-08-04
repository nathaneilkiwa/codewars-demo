/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.*/

//my solution 

function sumOfMinimums(arr) {
  // Math.min(...curr/...arr): Finds the minimum value in each row using the spread operator
  return arr.reduce((acc,curr)=>arr + Math.min(...curr),0)

  // or
    let total = 0
  for(let i=0; i<arr.length;i++ ){
    total += Math.min(...arr[i])
  }
  return total
}

