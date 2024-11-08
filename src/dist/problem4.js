"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        throw new Error("Unknown shape type");
    }
}
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
// Sample Input 2:
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea); // Output: 24
