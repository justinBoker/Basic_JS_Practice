// Coding Step 1.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Coding Step 1a.
console.log(ages[ages.length-1] - ages[0]);

// // Coding Step 1b.
ages.push(63);
console.log(ages[ages.length-1] - ages[0]);

// // Coding Step 1c.
let sum = 0;
for(let value of ages) {
    sum += value;
}
let average = sum / ages.length;
console.log(average);

// // Coding Step 2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// // Coding Step 2a.
let sum1 = 0;
for(let value of names) {
    sum1 += value.length;
}
let average1 = sum1 / names.length;
console.log(average1);

// // Coding Step 2b.
for(i = 5; i < names.length; i++) {
    console.log(names.join(' '));
}

// // Coding Step 3.
// // Use the array length property. For example: ages[ages.length-1].

// // Coding Step 4.
// // Use the [] operator. For example: ages[0].

// // Coding Step 5.
let nameLengths = [];
for(let value of names) {
    nameLengths.push(value.length);
}
console.log(nameLengths);

// // Coding Step 6.
let sum2 = 0;
for(let value of nameLengths) {
    sum2 += value;
}
console.log(sum2);

// // Coding Step 7.
let repeatWord = (word, n) => {
    console.log(word.repeat(n));
};
repeatWord('Hello', 3);

// // Coding Step 8.
let createFullName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
};
createFullName('Justin', 'Boker');

// // Coding Step 9.
let isGreaterThan100 = array => {
    let sum = 0;
    for(let value of array) {
        sum += value;
    }
    console.log(sum > 100);
};
isGreaterThan100([50, 50, 40]);

// // Coding Step 10.
let figureAverage = array => {
    let sum = 0;
    for(let value of array) {
        sum += value;
    } 
    let average = sum / array.length;
    console.log(average);
};
figureAverage([2, 5, 6, 19, 34, 5, 15]);

// // Coding Step 11.
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
    return average1 > average2; 
};
console.log("The first array is greater: " + isFirstArrayGreater([5, 8, 2], [20, 2, 5]));

// // Coding Step 12.
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    console.log(isHotOutside && moneyInPocket > 10.50);
};
willBuyDrink(true, 10.51);

// // Coding Step 13.
// // My function takes a number and returns the number and type of coins needed to create that amount.
// // I decided to create this function because I thought that it would be an interesting challenge.

let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;

let amountToCoins = amount => {
    if(amount > 0) {
        let quarters = (amount / quarter) >> 0;
        let dimes = ((amount - (quarter * quarters)) / dime) >> 0;
        let nickels = (((amount - (quarter * quarters)) - (dime * dimes)) / nickel) >> 0;
        let pennies = ((((amount - (quarter * quarters)) - (dime * dimes)) - (nickel * nickels)) / penny) >> 0;
        if(quarters == '1') {
            var qString = 'quarter';
        } else {
            qString = 'quarters';
        }
        if(dimes == '1') {
            var dString = 'dime';
        } else {
            dString = 'dimes';
        }
        if(nickels == '1') {
            var nString = 'nickel';
        } else {
            nString = 'nickels';
        }
        if(pennies == '1') {
            var pString = 'penny';
        } else {
            pString = 'pennies';
        }
        
        console.log(`You need ${quarters} ${qString}, ${dimes} ${dString}, ${nickels} ${nString}, and ${pennies} ${pString}.`);
    } else if(amount == 0) {
        console.log("No coins needed.");
    } else {
        console.log("Invalid amount");
    }
};

amountToCoins(156);