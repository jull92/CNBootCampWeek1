// hatvanyozas
const power = (num1, num2) => {
    return (num1**num2);
}
console.log(power(2, 6));

// Array activities
// Acitivty1: fav websites
let favSites = ["youtube.com", "modthesims.info", "reddit.com", "bbcgoodfood.com", "archiveofourown.org", "facebook.com"];
console.log(favSites)
favSites.push("tumblr.com", "gmail.com", "github.com");
// add items to the end
console.log(favSites);
favSites.pop(); 
// remove last item
console.log(favSites);

// Activit2: other array methods
favSites.shift();
// remove first item
console.log(favSites);
favSites.unshift("gyakorikerdesek.hu", "linkedin.com");
// add new item in the beginning
console.log(favSites);
favSites.splice(2, 1);
// remove item by index
console.log(favSites);
let first = favSites[0];
console.log(first)
// access first item
let last = favSites[favSites.length - 1];
console.log(last)
// access last item
favSites.indexOf("tumblr.com");
console.log(favSites.indexOf("tumblr.com"));
// find the index of an item
let pos = 1
let n = 2
let removedItems = favSites.splice(pos, n)
// n: number of items to be removed,
// pos: starting point for the removal
console.log(favSites)
console.log(removedItems)
console.log(favSites[3])
// display item by index

// sub sandwich
const subOrder = (topping1, topping2, topping3, topping4, topping5) => {
    console.log(`Order placed for sub: ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}`)
}
subOrder("lettuce", "olives", "pepperoni", "tomato", "red onion");

let values = [9, 7, 5, 6];
values.push(1, 2, 3, 4);
console.log(values);




