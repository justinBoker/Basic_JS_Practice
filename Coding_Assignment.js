// Coding Step 1.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Coding Step 1a.
function subtractFirstToLast () {
    let first = ages[0];
    let last = ages[ages.length-1];
    console.log(last - first);
}
subtractFirstToLast();

// Coding Step 1b.
ages.push(63);
subtractFirstToLast();

// Coding Step 1c.
let sum = 0;
for(let value of ages) {
    sum += value;
}
let average = sum / ages.length;
console.log(average);

// Coding Step 2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Coding Step 2a.
let sum1 = 0;
for(let value of names) {
    sum1 += value.length;
}
let average1 = sum1 / names.length;
console.log(average1);

// Coding Step 2b.
console.log(names.join(' '));

// Coding Step 3.
// Use the array length property

// Coding Step 4.
// Use the [] operator

// Coding Step 5.
let nameLengths = [];
for(let value of names) {
    nameLengths.push(value.length);
}
console.log(nameLengths);

// Coding Step 6.
let sum2 = 0;
for(let value of nameLengths) {
    sum2 += value;
}
console.log(sum2);

// Coding Step 7.
let repeatWord = (word, n) => {
    console.log(word.repeat(n));
};
repeatWord('Hello', 3);

// Coding Step 8.
let createFullName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
};
createFullName('Justin', 'Boker');

// Coding Step 9.
let isGreaterThan100 = array => {
    let sum = 0;
    for(let value of array) {
        sum += value;
    }
    console.log(sum > 100);
};
isGreaterThan100([1, 50, 40]);

// Coding Step 10.
let figureAverage = array => {
    let sum = 0;
    for(let value of array) {
        sum += value;
    } 
    let average = sum / array.length;
    console.log(average);
};
figureAverage([2, 5, 6, 19, 34, 5, 15]);

// Coding Step 11.
let isFirstArrayGreater = (array1, array2) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let value1 of array1) {
        sum1 += value1;
    }
    for(let value2 of array2) {
        sum2 += value2;
    }
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
    console.log(average1 > average2);
};
isFirstArrayGreater([5, 8, 2], [1, 2, 5]);

// Coding Step 12.
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    console.log(isHotOutside && moneyInPocket > 10.50);
};
willBuyDrink(false, 10.51);

// Coding Step 13.
