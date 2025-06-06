// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for 
// the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//  Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
//   DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
 
  let res ="";
  for(let i=0; i<dna.length; i++) {
    switch(dna[i]) {
      case 'A':
        res += "T";
        break;
      case 'T':
        res += "A";
        break;
      case 'G':
        res += "C";
        break;
      case 'C':
        res += "G";
        break;
    }
  }
  return res;
}
  function DNAStrand(dna){
  //your code here
  let result= "";
		  for(let i =0; i<dna.length; i++) 
		  {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
		 }
     return result;
}
