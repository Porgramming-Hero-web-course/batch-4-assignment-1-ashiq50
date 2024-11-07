The significance of union and intersection types in Typescript.

blog:

Union Types: 

 A union type allows a variable to hold one of several possible types. Think of it as "either-or." For example, number | string means a value can be either a number or a string. This flexibility is invaluable for handling scenarios where inputs might vary, such as optional function parameters or user inputs that can be in different formats.

example of union types:

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id}`);
  }
}

Intersection Type: 

An intersection type combines multiple types into one. A variable with an intersection type must meet the requirements of each intersected type. For example, { name: string } & { age: number } results in an object that has both name and age.


examples intersection type:

type Car = { make: string; model: string };
type Electric = { batteryCapacity: number };
type ElectricCar = Car & Electric;

const myCar: ElectricCar = {
  make: "Tesla",
  model: "Model S",
  batteryCapacity: 100
};

