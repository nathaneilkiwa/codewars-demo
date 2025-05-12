// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//my solution 

function solution(str){
    return str.slit('').reverse().join('')
}

// 2nd solution 

const solution = str => str.split('').reverse().join('')