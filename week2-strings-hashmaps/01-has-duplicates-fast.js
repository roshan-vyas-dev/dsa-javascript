// Plan:
// 1. Make an empty object called seen (this is the table)
// 2. Look at each number one by one
// 3. Put the number in seen if it is not already there
// 4. If the number is already in seen, return true
// 5. If I finish all the numbers, return false

function hasDuplicatesFast(arr) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in seen) {
      return true;
    }
    seen[arr[i]]=true;
  }

  return false;
}

console.log(hasDuplicatesFast([1, 2, 3, 4])); // false
console.log(hasDuplicatesFast([1, 2, 3, 2])); // true
console.log(hasDuplicatesFast([]));           // false
console.log(hasDuplicatesFast([7]));          // false