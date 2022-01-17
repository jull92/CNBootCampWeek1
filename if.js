const grade = 34

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

// Activity1
const age= 118
if (age>=18){
    console.log("I can serve you");
}
else {
    console.log("You aren't old enough to drink, I can't serve you")
}

// Activity: switch case pizza topping
let favIngredient = ["olives", "mushroom", "pineapple"]
let dontMind = ["tuna", "onion", "rocket"]
let topping ="tuna"
switch (true){
    case topping = favIngredient:
        console.log("These are important ingredients for my pizza.");
        break;
    case topping = dontMind:
        console.log(`I don’t mind having ${topping} on my pizza.`)
        break;
    default:
        console.log(`${topping} should not be on a pizza.`)
}

// Challenge1
let password="123456";
let length=password.length;
if (length<8){
    console.log("Password is too short");
}
else{
    console.log(password);
}

// Challenge2
const num2=7;
if (num2%3===0 || num2%5===0){
    console.log("This number is divisible by 3 or 5");
}
else{
    console.log("This number is not divisible by 3 or 5");
}

// Challenge3
const num3=45;
switch (0){
    case (num3%15):
        console.log("FizzBuzz");
        break;
    case (num3%5):
        console.log("Buzz");
        break;
    case (num3%3):
        console.log("Fizz")
        break;
    default:
        console.log(num3)
}

// Challnge4: check if palindrome
let num4 = 1001;
let num4str = num4.toString();
let numRev = num4str.split('').reverse().join('');

switch (true){
    case num4str == numRev:
        console.log("is palindrome");
        break;
    default:
        console.log("Is not palindrome")
}

// Challenge5
let time=17;
let placeOfWork="Aintree";
let homeTown= "Walton";
if (time<8){
    console.log(`I'm at home in ${homeTown}`);
}
else if (time>=8 && time<9){
    console.log("I'm commuting to work");
}
else if (time>=9 && time<=17){
    console.log(`I'm at work in ${placeOfWork}`);
}
else if (time>17 && time<=18){
    console.log("I'm commuting home");
}
else{
    console.log(`I'm back at home in ${homeTown}`)
}

// Challenge6
let string="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// find the last vowel in the string

// Challnge7
let word=""
// check if last letter is the same as the first

// Challenge8
let num81=2;
let num82=9;
if ((num81+num82)%2==0){
    console.log(num81+num82)
}
else{
    console.log(num81*num82)
}
