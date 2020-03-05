class Trie {
  characters: {};
  isEndOfWord: boolean;

  constructor(isEndOfWord = false) {
    this.characters = {};
    this.isEndOfWord = isEndOfWord;
  }

  addWord(word: string, index = 0) {
    if (word.length === index) return this;

    let char = word[index];

    let subTrie: Trie;
    let isEndOfWord = word.length - 1 === index;

    if (this.characters[char]) {
      subTrie = this.characters[char];
      subTrie.isEndOfWord = subTrie.isEndOfWord || isEndOfWord;
    } else {
      subTrie = new Trie(isEndOfWord);
      this.characters[char] = subTrie;
    }

    subTrie.addWord(word, index + 1);
  }

  getStrings(currentString = '', words = []) {
    for (const char in this.characters) {
      const nextString = currentString + char;
      const subTrie: Trie = this.characters[char];

      if (subTrie.isEndOfWord) words.push(nextString);

      subTrie.getStrings(nextString, words);
    }
    return words;
  }

  findSequence(word: string, index = 0) {
    const char = word[index];
    const subTrie: Trie = this.characters[char];

    if (index < word.length - 1 && subTrie) {
      return subTrie.findSequence(word, index + 1);
    }
    return subTrie;
  }

  findWord(word: string) {
    const subTrie: Trie = this.findSequence(word);

    if (subTrie && subTrie.isEndOfWord) {
      return true;
    }
    return false;
  }

  autoComplete(word: string) {
    const subTrie: Trie = this.findSequence(word);

    if (subTrie) {
      return subTrie.getStrings(word);
    }
    return [];
  }
}

const trieNew = new Trie();

trieNew.addWord('fun');
trieNew.addWord('fast');
trieNew.addWord('food');
trieNew.addWord('fate');
trieNew.addWord('father');
trieNew.addWord('forget');
trieNew.addWord('awesome');
trieNew.addWord('argue');
trieNew.addWord('f');
// console.log(trieNew.getStrings());
// console.log(trieNew.findSequence('fat'));
// console.log(trieNew.findWord('fat'));
console.log(trieNew.autoComplete('fa'));

//console.log(JSON.stringify(trieNew));
