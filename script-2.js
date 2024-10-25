// 1. Conditional Branching: if, ?

// let age = 18;    >= <=  ===
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Ternary operator (?): A shorter way to write an if-else statement.

// let name = 'Alexander';
//
// let message = name === 'Alexander' ? 'hi, Alexander' : 'hi new fella';

let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);
// 2. Logical Operators
// && (AND): Returns true if both conditions are true.

let isAdult = true;
let hasID = true;
if (isAdult && hasID) {
    console.log("You can enter.");
}

// || (OR): Returns true if at least one condition is true.

let isAdult = false;
let hasPermission = true;
if (isAdult || hasPermission) {
    console.log("You can enter.");
}
// ! (NOT): Reverses the condition.

let isAdult = false;
if (!isAdult) {
    console.log("You are not an adult.");
}
// 3. Nullish Coalescing Operator (??)

let userName = null; // null or undefined
let defaultName = "Guest";
let nameToDisplay = userName ?? 'asddasda';
console.log(nameToDisplay); // Output: Guest


// Loops: while and for
let count = 0; //1

while (count < 5) {
    console.log(count); // 0 // 1 // 2 //3 //4 //5
    count++
}
// Output: 0, 1, 2, 3, 4

// for its a loop: A compact way to write a loop, with initialization, condition, and increment in one line.

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
// 2. The switch statement

        let day = 3;
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            default:
                console.log("Invalid day");
        }

        let variable1 ='Alexandr';
        let variable2 = 'Yehor';
        let variable3 = 'Alexandr';
        let variable4 = 'Yehor';



        if ((variable1  === 'Alexandr' && variable2 === 'Yehor') || (variable3 === 'Alexandr' && variable4 === 'Yehor') ) {
            return 'i count bouth people '
        }
