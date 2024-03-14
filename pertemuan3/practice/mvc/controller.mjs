// import data users from './data.mjs';
import users from "./data.mjs";

/**
 * Membuat controller users
 * @Methods: index, store
 */
const index = () => {
    console.log("Index - Get All Users");
    users.forEach((user) => console.log(user));
};
const store = (user) => {
    users.push(user);
    console.log("Store - Added New User!");
    console.log(user);
};

/**
 * export the controller
 */

export { index, store };
