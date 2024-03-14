/**
 * menjalankan method map
 * membuat array baru dengan nama yang diubah
 */
const names = ["Michael", "Monica", "Jack"];

const formattedName = names.map((name) => {
    return `Mr/Mrs. ${name}`;
});

console.log("formattedName: ");
console.log(formattedName); // [ 'Mr/Mrs. Michael', 'Mr/Mrs. Monica', 'Mr/Mrs. Jack' ]
