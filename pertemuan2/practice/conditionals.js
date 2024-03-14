const age = 21 > 18 ? "You are an adult" : "You are a minor";

console.log(age);

const yearBorn = 1999;

if (yearBorn > 2000) {
    console.log("You are a millennial");
} else if (yearBorn < 2000) {
    console.log("You are a gen Z");
} else {
    console.log("You are on others generation");
}

const grade = 4; // 1-5

switch (grade) {
    case 1:
        console.log("You are a freshman");
        break;
    case 2:
        console.log("You are a sophomore");
        break;
    case 3:
        console.log("You are a junior");
        break;
    case 4:
        console.log("You are a senior");
        break;
    case 5:
        console.log("You are a super senior");
        break;
    default:
        console.log("You are not in school");
        break;
}
