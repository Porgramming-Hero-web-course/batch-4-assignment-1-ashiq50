"use strict";
function validateKeys(obj, keys) {
    for (const key of keys) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
}
// Sample Input:
const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"])); // Output: true
console.log(validateKeys(person2, ["name", "phone"])); // Output: false
