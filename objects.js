let drinks = ["Coke", "Orange juice", "Lemonade", "Lilt", "Water", "J2O"];
let drinkCost = [1.5, 1, 1.5, 1, 0.5, 1.5];
let userBalance = 10;
// const checkDrinks = () => {
//     for (let i = 0; i < drinks.length; i++){
//         console.log(drinks[i]);
//     }
// };
const checkBalance = () => {
    console.log(`Available drinks: `)
    for (let i = 0; i < drinks.length; i++){
        console.log(`${drinks[i]}: £${drinkCost[i]}`)
    }
    console.log(`Available balance: £${userBalance}`)
};
const checkSelection = (choice) => {
    if (userBalance >= drinkCost[choice]) {
        console.log(`Enjoy your ${drinks[choice]}, you've got good taste!`);
    } else {
        console.log("Item not available");
    }
};
// checkDrinks();
checkBalance();
checkSelection(9);


// const person = {
//     name: "Julia", 
// }


// Activity: alarm clock
let currentDay = "Sunday";
const day = {
    weekend: ["Saturday", "Sunday"],
    weekday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
};
const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};
if (day.weekend.includes(currentDay)){
    console.log(alarm.weekendAlarm)
} else if (day.weekday.includes(currentDay)){
    console.log(alarm.weekdayAlarm)
} else {
    console.log("Thats not a valid day")
}

// Activity: pet
const pet = {
    name:"Scratch",
    typeOfPet: "dog",
    age: 3,
    colour: "brown",
    eat: () => {
        console.log(`${pet.name} is eating`)
    },
    // arrow function cant refer back with `this`
    drink: function() {
        console.log(`${this.name} is drinking`)
    }
    // two ways of declaring a function (methods because they are inside an object)
    // `this` refers back to the object we are declaring, provides reusability and functionality in case we later change the name of the object
};
// let eat = () => {
//     console.log(`${pet.name} is eating`);
//  };
//  let drink = () => {
//      console.log(`${pet.name} is drinking`);
//  };
//  eat();
//  drink(); 
pet.eat();
pet.drink();


