/**
 * copy family array to another array
 */
const family = ["Michael", "Monica", "Jack"];
const familyCopy = [family[0], family[1], family[2], "Jill", "John"]; // not efficient

// console.log(familyCopy); // [ 'Michael', 'Monica', 'Jack', 'Jill', 'John' ]

// using spread operator
const familyCopy2 = [...family, "Jill", "John"]; // efficient

console.log(familyCopy2); // [ 'Michael', 'Monica', 'Jack', 'Jill', 'John' ]

/**
 * copy object to another object
 */
const person = {
    name: "John Doe",
    age: 30,
};

const newPerson = {
    name: person.name,
    age: person.age,
    major: "Computer Science",
}; // not efficient

// console.log(newPerson); // { name: 'John Doe', age: 30, major: 'Computer Science' }

// using spread operator
const newPerson2 = { ...person, major: "Computer Science" }; // efficient
