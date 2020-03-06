using System;
using System.Collections.Generic;
namespace CTrie
{
    class SuffixTrieNode
    {
        Dictionary<Char, SuffixTrieNode> children = new Dictionary<char, SuffixTrieNode>(1);
        public List<string> names = new List<string>();

        // A recursive function to insert a suffix of 
        // the text in subtree rooted with this node 
        public void insertSuffix(String s, string name)
        {
            // Store index in linked list 
            names.Add(name);

            // If string has more characters 
            if (s.Length > 0)
            {

                // Find the first character 
                char firstChar = s[0];

                // If there is no edge for this character, 
                // add a new edge 
                if (children.ContainsKey(firstChar) == false)
                    children.Add(firstChar, new SuffixTrieNode());

                // Recur for next suffix 
                if (children.TryGetValue(firstChar, out var leaf))
                {
                    leaf.insertSuffix(s.Substring(1), name);

                }
            }
        }

        // A function to search a pattern in subtree rooted 
        // with this node.The function returns pointer to a 
        // linked list containing all indexes where pattern 
        // is present. The returned indexes are indexes of 
        // last characters of matched text. 
        public List<string> search(String s)
        {

            // If all characters of pattern have been 
            // processed, 
            if (s.Length == 0)
                return names;

            // if there is an edge from the current node of 
            // suffix tree, follow the edge. 
            if (children.TryGetValue(s[0], out var leaf))
            {
                return leaf.search(s.Substring(1));
            }
            else
                return null;
        }
    }

    // A Trie of all suffixes 
    public class Suffix_tree
    {

        SuffixTrieNode root = new SuffixTrieNode();

        // Constructor (Builds a trie of suffies of the 
        // given text) 
        void insertString(String txt)
        {

            // Consider all suffixes of given string and 
            // insert them into the Suffix Trie using 
            // recursive function insertSuffix() in 
            // SuffixTrieNode class 
            for (int i = 0; i < txt.Length; i++)
                root.insertSuffix(txt.Substring(i), txt);
        }

        /* Prints all occurrences of pat in the 
        Suffix Trie S (built for text) */
        void search_tree(String pat)
        {

            Dictionary<string, bool> hashMap = new Dictionary<string, bool>();



            // Let us call recursive search function 
            // for root of Trie. 
            // We get a list of all indexes (where pat is 
            // present in text) in variable 'result' 
            List<string> result = root.search(pat);

            // Check if the list of indexes is empty or not 
            if (result == null)
                Console.WriteLine("Pattern not found");
            else
            {
                int patLen = pat.Length;


                foreach (string name in result)
                {
                    if (hashMap.ContainsKey(name)) continue;
                    hashMap.Add(name, true);
                    Console.WriteLine("The Resultant word is " + (name));

                }


            }
        }

        // Driver Code 
        public static void Main(String[] args)
        {

            // Let us build a suffix trie for text 
            // "geeksforgeeks.org" 
            String txt = "geeksforgeeks.org";
            String txt1 = "abcgeeksforgeeks.org";
            String txt3 = "geeks";
            Suffix_tree S = new Suffix_tree();
            S.insertString(txt);
            S.insertString(txt1);
            S.insertString(txt3);

            Console.WriteLine("Search for 'geek'");
            S.search_tree("geek");

            // Console.WriteLine("\nSearch for 'geek'");
            // S.search_tree("geek");

            // Console.WriteLine("\nSearch for 'quiz'");
            // S.search_tree("quiz");

            // Console.WriteLine("\nSearch for 'forgeeks'");
            // S.search_tree("forgeeks");
        }
    }

    // This code is contributed by 29AjayKumar 


}
