/*The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, 
or more importantly, stepped on.

As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead 
them to raise their voices and put them in danger.

The young borrowers have begged their parents to stop using caps and punctuation.

Change the input text s to new borrower speak. Help save the next generation!*/

//solution 

function borrow(s){
  let str = s.toLowerCase()
  //check for anything thats not a alphabet
  return str.replace(/[^\w]/gi,"").trim()
}

function borrow(s){
  return  s.toLowerCase().replace(/[^a-z]/g, '')
}