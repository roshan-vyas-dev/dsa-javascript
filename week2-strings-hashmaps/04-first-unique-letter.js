function firstUniqueLetter(word) {
  const counts = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter in counts) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (counts[word[i]] === 1) {
      return word[i];
    }
  }
  return null;
}

console.log(firstUniqueLetter("swiss")); // "w"
console.log(firstUniqueLetter("aabb")); //  null
console.log(firstUniqueLetter("")); // should null

// Big O (time): O(n)
// Extra memory (space): O(k), where k is the number of different letters