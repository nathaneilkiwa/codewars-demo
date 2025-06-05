// You will be given an array and a limit value. You must check that all values in the 
// array are below or equal to the limit value.If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//solution 

function smallEnough(a,limit){
    //loop through the array 
    for(let i = 0; i < a.length ; i++){
        //check if the array is > the limit 
        if(a[i] > limit){
            return false
        }
    }return true 
}

function smallEnough(a,limit){
    return Math.max(...a) < limit
}