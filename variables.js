console.log("All around the World".charAt(9).toUpperCase());

let favDrink = "coffee";
console.log("My favourite drink is " + favDrink);
console.log("My favourite drink is " + favDrink + " because it is nice");
console.log(`My favourite drink is ${favDrink} because it is nice`);

// Activity1
let myName = "Julia";
let myAge = 29;
let favColour = "yellow";
console.log(`My name is ${myName}, I am ${myAge} years old and my favourite colour is ${favColour}`);
console.log("My name is " + myName + ", I am " + myAge + " years old and my favourite colour is " + favColour);
console.log(`My name is ${myName}, I am ${myAge} years old and my favourite colour is ${favColour}`.toUpperCase());
console.log(`My name is ${myName}, I am ${myAge} years old and my favourite colour is ${favColour}`.toLowerCase());

// Activity2
let breakfast = "porridge";
let lunch = "ramen";
let dinner = "pork chops"
console.log(`Today I had ${breakfast} in the morning. For lunch I will have ${lunch}. Tonight my dinner will be ${dinner}.`);

breakfast = "crumpets";
lunch = "leftovers";
dinner = "beef tagine";
console.log(`Today I had ${breakfast} in the morning. For lunch I will have ${lunch}. Tonight my dinner will be ${dinner}.`);
console.log(`Today I had ${breakfast} in the morning. For lunch I will have ${lunch}. Tonight my dinner will be ${dinner}.`.toUpperCase());
console.log(`Today I had ${breakfast} in the morning. For lunch I will have ${lunch}. Tonight my dinner will be ${dinner}.`.toLowerCase());

// Activity3
const birthDay = new Date(2022, 7, 2);
const toDay = new Date();

console.log(Math.floor(Math.abs((birthDay - toDay) / (1000 * 60 * 60 * 24))));

//Activity 4
let space1 = "x";
let space2 = "0";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log(`   |   |   \n ${space1} | ${space2} | ${space3} \n   |   |   \n-----------\n   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   \n-----------\n   |   |   \n ${space7} | ${space8} | ${space9} \n   |   |   `);


