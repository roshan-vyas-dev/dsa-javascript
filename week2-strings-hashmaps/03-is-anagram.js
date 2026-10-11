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

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const counts1 = countLetters(word1);
  const counts2 = countLetters(word2);

  for (const letter in counts1) {
    if (counts1[letter] !== counts2[letter]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("listen", "silent")); //  true
console.log(isAnagram("hello", "world")); //  false
console.log(isAnagram("abc", "ab")); //  false
console.log(isAnagram("", "")); //  true


// Big O (time): O(n)
// Extra memory (space): O(k), where k is the number of different letters