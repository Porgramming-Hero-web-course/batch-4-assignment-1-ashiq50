function countWordOccurrences(sentence: string, word: string): number {
     const lowerSentence = sentence.toLowerCase();
     const lowerWord = word.toLowerCase();
   
     const words = lowerSentence.split(/\W+/);
     return words.filter(w => w === lowerWord).length;
   }
   
   // Sample Input:
   console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
   // Sample Output: 2