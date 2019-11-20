
console.log("Everphone - Hello World!");

let word = "apple" // ale
let resultingWord=""
let removedLetters=""
let result=[]

for(let i=0; i<word.length; i++){
    if(result[word[i]])
      result[word[i]]++
    else {
      result[word[i]]=1
    }
}

Object.keys(result).forEach(function (key) {
  if(result[key]===1)
    resultingWord+=key
});

console.log(resultingWord)

// for(let i=0; i<word.length; i++){
//   let found=false;
//   if(removedLetters.indexOf(word[i])>-1){
//     found=true
//   }
//   else {
//     for(let j=i+1; j<word.length; j++){
//         if(word[i]===word[j]){
//             found=true
//             removedLetters+=word[i]
//
//             result[word[j]]++
//         }
//     }
//   }
//
//   if(!found){
//       resultingWord+=word[i]
//   }
// }
// console.log("ResultingWord: "+resultingWord)
