"use strict";

// MAKE THIS BETTER !!!!

//-------------arrays----------------//

const bills = [];
const tips = [];
const total = [];

//------------get bills function-----------------//

const getBills = function () {
  let bill = prompt(`Write something`, "");
  if (bill === "" || bill === null)
    return console.log(`You canceled the operation`);
  if (isNaN(+bill)) return console.log(`You write not a number`);
  while (bill !== "" && bill !== null) {
    if (!isNaN(bill)) {
      bills.push(+bill);
      bill = prompt(`Write something`, "");
    } else {
      break;
    }
  }
};

//--------------calcTip function---------------//

const calcTip = function () {
  for (let i = 0; i < bills.length; ++i) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
    } else {
      tips.push(bills[i] * 0.2);
    }
  }
};

//--------------calcTotal function---------------//

const calcTotal = function () {
  for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
  }
};

//--------------calcAverage function---------------//

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avr = sum / arr.length;
  return avr;
};

//--------------use functions---------------//

getBills();
calcTip();
calcTotal();

//--------------log it to console---------------//

console.log(`There's bills`, bills);
console.log(`There's tips`, tips);
console.log(`There's total`, total);

console.log(`Average of total is`, calcAverage(total));

//-----------------------------//
//-----------------------------//
//-----------------------------//
