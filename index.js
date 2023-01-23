const newSet = new Set([1,1,2,2,3,4])

console.log(newSet) // Set(4) { 1, 2, 3, 4 }


const newSets = [...new Set("referee")].join("")

console.log(newSets) // ref


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m) // Map(2) { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }


const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false


function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }