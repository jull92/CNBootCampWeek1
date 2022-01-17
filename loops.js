let multiplesTwo = [];
for (let i = 0; i<20; i++) {
    if (i%2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(multiplesTwo)


let age = 15
while (age<18){
    console.log("You are a child!");
    age++
}
console.log("You are an adult");


let randomNum = 0;
while (randomNum<10){
    console.log(`Random No. ${randomNum} \n Keep looping!`);
    randomNum = (Math.round(Math.random() * 20));
}
console.log(`No more looping, with random No. ${randomNum}`)

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";
while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard)


// Activity1
let favFilms = ["Fifth Element", "Cloud Atlas", "Shrek", "Megamind", "Mulan"];
console.log(favFilms);
favFilms.push("V for Vendetta", "Merlin 1998");
console.log(favFilms);
for (let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}


// Activity 2
for (let i = 0; i<6; i++){
    console.log(Math.random()*49+1);
}


// Activity3
for (let i = 0; i<10; i++){
    console.log(i);
}
for (let i = 9; i>-1; i--){
    console.log(i);
}


// Activity4
let films = ["Blues Brothers", "Grease", "Ghostbusters", "Rocky Horror Picture Show"];
for (let i = 0; i < films.length; i++){
    console.log(films[i])
}
let filmCheck = () => {
    if (films[2] == "Ghostbusters"){
        console.log("Yey it's Ghostbusters!");
    } else {
        console.log("Booo, we want Ghostbsters!");
    }
}
filmCheck()
films.unshift("Coneheads")
filmCheck()


// Activity5
const div7 = () => {
    for (let i = 0; i<30; i++) {
        let ranNum = Math.ceil(Math.random()*30);
        if (ranNum%7==0){
            console.log(`${ranNum} is divisible by 7`);
        } else {
            console.log(`${ranNum} is not divisible by 7`);
        }
    }
}
div7()


// Activity6: do while loop
// Creates a loop that executes a specified statement until the test condition evaluates to false
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once
let y = 0
do{
    console.log("y = " +y);
    y++;
}while(y < 5);


// Activity7: 
const prime = () => {
    for (let j = 0; j<21; j++) {
        if (j%j==0 && j%1==0){
            console.log(`${j} is divisible by 7`);
        } else {
            console.log(`${j} is not divisible by 7`);
        }
    }
}
prime()

// let n = 1
// while (n < 20) {
//     if (n == (n / n) && n == (n / 1) || (n / (Math.ceil(Math.random() * 20)) != n)) {
//     console.log(`Yes, ${n} is a Prime Number`);}
//      else {(`No, ${n} is not a Prime Number`)}
//         n++;
// };



