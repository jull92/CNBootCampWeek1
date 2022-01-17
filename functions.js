// naughts and crosses
let space1 = "x";
let space2 = " ";
let space3 = "x";
let space4 = " ";
let space5 = "x";
let space6 = " ";
let space7 = "x";
let space8 = " ";
let space9 = "o";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");

switch (true){
    case space1 == space2 && space1 == space3 && space2 == space3:
        console.log("you win")
        break;
    case space1 == space5 && space1 == space9 && space5 == space9:
        console.log("you win")
        break;
    case space1 == space4 && space4 == space7 && space1 == space7:
        console.log("you win")
        break;
    case space2 == space5 && space2 == space8 && space5 == space8:
        console.log("you win")
        break;
    case space3 == space6 && space3 == space9 && space6 == space9:
        console.log("you win")
        break;
    case space3 == space5 && space3 == space7 && space5 == space7:
        console.log("you win")
        break;
    default:
        console.log("No one wins")
        
}

// function
let coffeeIsGrinding = true;
const pressGrindBeans = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grinding");
        coffeeIsGrinding = false;
    } else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();

// cashmachine
let accnum = 1234568;
let balance = 10000
let amount = 300
const cashWithdrawal = (amount, accnum) =>{
    if (amount <= balance){
        console.log(`Withdrawing £${amount} from account No.${accnum}`)
        balance=balance-amount
        console.log(`New balance: £${balance}`)
    }
    else{
        console.log("Insufficient funds")
    }
}
cashWithdrawal(amount, accnum)

// return
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7, 3);
console.log(addUp(4, 9));

// temperature conversion
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32
};
console.log(`The temerature is ${getFarenheit(15)}°F`)

// Activity: coffee order

const coffeeOrder = (size, type) => {
    console.log(`Order received: ${size}, ${type}`);
}
coffeeOrder("Tall", "Latte")

// Activity: factorial
const factorial = (n) => {
    if ((n===0) || (n===1)){
        return 1;
    } else{
        return (n*factorial(n-1));
    }
}
console.log(factorial(3))

