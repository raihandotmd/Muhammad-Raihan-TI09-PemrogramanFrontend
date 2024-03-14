/**
 * Usecase: show 100 products
 *
 */

// 1. for loop
for (let i = 0; i < 10; i++) {
    console.log(`(For) Product ${i + 1}`);
} // the condition is checked before the loop is executed

// 2. while loop
let i = 0;
while (i < 10) {
    console.log(`(While) Product ${i + 1}`);
    i++;
} // the condition is checked before the loop is executed´´

// 3. do while loop
let j = 0;
do {
    console.log(`(Do while) Product ${j + 1}`);
    j++;
} while (j < 10); // the condition is checked after the loop is executed

// 4. for of loop
const animals = ["🐶", "🐱", "🐭", "🐹", "🐰"];

for (const animal of animals) {
    console.log(animal);
} // it iterates over the values of an iterable object
