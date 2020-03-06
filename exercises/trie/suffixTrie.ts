var now = require('performance-now');
var random = require('random-name');
class SuffixTrieNode {
  children = new Map<string, SuffixTrieNode>();
  names = [];

  // A recursive function to insert a suffix of
  // the text in subtree rooted with this node
  insertSuffix(s: string, name: string) {
    // Store index in linked list
    this.names.push(name);

    // If string has more characters
    if (s.length > 0) {
      // Find the first character
      const firstChar = s[0];

      // If there is no edge for this character,
      // add a new edge
      if (!this.children.has(firstChar))
        this.children.set(firstChar, new SuffixTrieNode());

      // Recur for next suffix
      if (this.children.has(firstChar)) {
        this.children.get(firstChar).insertSuffix(s.substring(1), name);
      }
    }
  }

  search(s: string) {
    // If all characters of pattern have been
    // processed,
    if (s.length == 0) {
      return this.names;
    }

    // if there is an edge from the current node of
    // suffix tree, follow the edge.
    if (this.children.has(s[0])) {
      return this.children.get(s[0]).search(s.substring(1));
    } else return null;
  }
}

// A Trie of all suffixes
class Suffix_tree {
  root = new SuffixTrieNode();

  // Constructor (Builds a trie of suffies of the
  // given text)
  insertString(txt: string) {
    for (let i = 0; i < txt.length; i++)
      this.root.insertSuffix(txt.substring(i), txt);
  }

  /* Prints all occurrences of pat in the 
        Suffix Trie S (built for text) */
  search_tree(pat: string): Map<String, boolean> {
    const hashMap = new Map<String, boolean>();

    const results = this.root.search(pat);

    // Check if the list of indexes is empty or not
    if (results == null) console.log('Pattern not found');
    else {
      const patLen = pat.length;

      for (let name of results) {
        if (hashMap.has(name)) continue;
        hashMap.set(name, true);
      }
    }

    return hashMap;
  }
}

const S = new Suffix_tree();

const ONE_MILLION = 100000;
for (let i = 0; i < ONE_MILLION; i++) {
  //console.log(random.first());
  S.insertString(random.first());
}

console.log("Search for 'ee'");
var t0 = now();
const result = S.search_tree('ee');
var t1 = now();
result.forEach((val, key) => {
  console.log(key);
});

console.log(
  'Call to doSomething took ' + (t1 - t0).toFixed(3) + ' milliseconds.'
);
