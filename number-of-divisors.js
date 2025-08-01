
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30


function getDivisorsCnt(n){
  // assign count to be 0
  let counter = 0;
// If n is a perfect square, we need to count the sqrt(n) as a single factor
  if (n % Math.sqrt(n) == 0) {
    counter++;
  }
// loop through the n
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      counter += 2;
    }
  }

  return counter;
}