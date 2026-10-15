function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

const nums = [1, 2, 3, 4, 5];
reverseInPlace(nums);
console.log(nums); //  [5, 4, 3, 2, 1]

const empty = [];
reverseInPlace(empty);
console.log(empty); // []

const one = [7];
reverseInPlace(one);
console.log(one); // [7]

// Big O (time): O(n)
// Extra memory (space): O(1), only left, right and temp are used