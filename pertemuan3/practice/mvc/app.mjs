/**
 * Importing the controller
 * @Methods: index, store (from ./controller.mjs) destructuring
 */
import { index, store } from "./controller.mjs";

const main = () => {
    const user = { name: "Rahmat", age: 20 };
    console.log("Main - App");
    index();
    store(user);
    index();
};

main();
