function sumArray(numbers: number[]): number {
     let total = 0; 
     for (const num of numbers) {
       total += num;
     }
     return total;
   }
   
   // Sample Input:
   console.log(sumArray([1, 2, 3, 4, 5]));
   