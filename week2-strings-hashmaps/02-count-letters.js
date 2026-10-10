function countLetters(word) {
  const counts = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (letter in counts) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}

console.log(countLetters("hello")); //  { h: 1, e: 1, l: 2, o: 1 }
console.log(countLetters("")); //  {}
console.log(countLetters("aaa")); // { a: 3 }

// Big O (time): O(n)
// Extra memory (space): O(k), where k is the number of different letters