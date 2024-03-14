/**
 * Membuat fungsi sum
 * menjumlahkan semua parameter yang diberikan
 */
function sum(...numbers) {
    let hasil = 0;
    for (number of numbers) {
        hasil += number;
    }

    return hasil;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

function showFamily(husband, wife, ...children) {
    console.log("Husband: ", husband);
    console.log("Wife: ", wife);
    for (child of children) {
        console.log("Child: ", child);
    }
}

showFamily("Michael", "Monica", "Jack", "Jill", "John");
