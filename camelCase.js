/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

//my solution 

function solution(string){
    let str = string.split('').map((x)=>{
        if(x=== x.toUpperCase()){
            x = ' '+ x
        }
        return x
    })
    return str.join('')
}

// or 

function solution(string){
    return string.replace(/[A-Z]/g,' $&')

//[A-Z] a capital letter from the Latin alphabet.
//$& backreference to the matched letter, used in the replacement.
//g global flag so all matches are replaced.
}