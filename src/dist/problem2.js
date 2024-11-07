"use strict";
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
