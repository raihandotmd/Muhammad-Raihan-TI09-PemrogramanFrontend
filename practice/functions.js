// create functions
// 1. function declaration
function sayHello() {
    console.log("Hello");
} // it means that the function is declared using the 'function' keyword

sayHello();

// 2. function expression
const sayHelloAgain = function () {
    console.log("Hello again");
}; // it means that the function is assigned to a variable

sayHelloAgain();

// 3. arrow function
const sayHelloArrow = () => {
    console.log("Hello arrow");
}; // it means that the function is declared using the arrow syntax

sayHelloArrow();
