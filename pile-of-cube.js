

/*Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 

 , the cube above will have volume of and so on until the top which will have a volume of 

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as*/ 


//solution 

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}