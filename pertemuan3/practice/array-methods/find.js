// creating array object
const users = [
    {
        name: "Michael",
        age: 30,
    },
    {
        name: "Monica",
        age: 25,
    },
    {
        name: "Jack",
        age: 40,
    },
];

/**
 * find 1 of the object that has the age more than 30
 */
const personAge = users.find((user) => {
    return user.age > 30;
});

console.log("personAge: ");
console.log(personAge); // { name: 'Jack', age: 40 }
