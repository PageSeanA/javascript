
// JavaScript
// Tuesday, 02.04.20
// MediaKeyStatusMap

                                        //Medium\\\\

// 1. Madib - Write a madlib function, which is given a name and a subject.
// It will return(not print) a new string: (name)'s favorite subject in school is (subject).

//********* var name = 'Mosh';          // slide 8/29*********
// ******* var subject = 'History';      // slide 8/29********
// console.log(name);

// Tuesday, Feb 4th.


// 1. Madlib -


// function madlib(name, subject) {
//   return console.log(name + "'s favorite subject is " + subject);
// }

// madlib('Sean', 'History');

//********* console.log(`${name}'s favorite subject is ${subject}`);  // slide 8/29*******


// // 2. Tip Calculator - Write a function tipAmount that is given the bill amount and the level of service 
// (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%


// function tipAmount(billAmount, serviceLevel) {
//   if (serviceLevel == 'good') {
//     let tipTotal = billAmount * 0.20;
//     console.log(tipTotal);
//     return tipTotal;
//   } else if (serviceLevel == 'fair') {
//     let tipTotal = billAmount * 0.15;
//     console.log(tipTotal);
//     return tipTotal;
//   } else {
//     let tipTotal = billAmount * 0.10;
//     console.log(tipTotal);
//     return tipTotal;
//   }
// }
// tipAmount(100, 'good');


// // 3. Tip Calculator 2 - Write a function totalAmount that takes the same arguments as tipAmount except it returns
//  the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.


// function totalAmount(billAmount, serviceLevel) {
//     if (serviceLevel == 'good') {
//       let tipAmount = billAmount * 0.2 + billAmount;
//       console.log(tipAmount);
//       return tipAmount;
//     } else if (serviceLevel == 'fair') {
//       let tipAmount = billAmount * 0.15 + billAmount;
//       console.log(tipAmount);
//       return tipAmount;
//     } else {
//       let tipAmount = billAmount * 0.1 + billAmount;
//       console.log(tipAmount);
//       return tipAmount;
//     }
//   }
//   totalAmount(100, 'good');


// // 4. Print Numbers - Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line.


// function printNumbers(startNum, lastNum) {
//   for (let integer = startNum; integer < lastNum; integer++) {
//     console.log(integer);
//   }
// }
// printNumbers(1, 11);

// 4.1 Write two versions of the above function. One using a while loop and the other using a for loop.


// function printNums(startNum, lastNum) {
//   while (startNum < lastNum) {
//     console.log(startNum);                 *** QUESTION - Originally I put startNum++ before console.log but got a print that
//     startNum++;                                        //was off by one for the startNum & lastNum. I don't understand why
//   }                                                    //the order of that code placement would make  the number off by one.
// }
// printNums(1, 11);


// // 5. Print a Square - Write a function printSquare which is given a size and prints a square of that size using asterisks.


// function printSquare(size) {
//   for (var integer = 0; integer < size; integer++) {   //Note - For each loop & each line...
//     console.log('*'.repeat(size));                          // ... print out as many * as the size 5 using the .repeat().
//   }                                                        //https://www.geeksforgeeks.org/javascript-string-repeat/
// }

// printSquare(5);


// // 6. Print a Box - Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// function printBox(width, height) {                          //Notes - 
//   console.log('*'.repeat(width));                              //Prints out as many * as the width using .repeat(). For the top.
//   for (var integer = 0; integer < height - 2; integer++) {     //For each loop...
//     console.log('*' + ' '.repeat(width - 2) + '*');            //Prints out the height for the sides but places space in the middle.
//   }
//   console.log('*'.repeat(width));                              //Prints out as many * as the width using .repeat(). For the base.
// }

// printBox(6, 4);


// // 7. - Write a function printBanner which is given some text and prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.


// function printBanner(someText) {
//   length = someText.length;
//   console.log('*'.repeat(length + 4));    //Note - Added the + 4 to the * because without doing so the length is short by 4.
//   console.log('* ' + someText + ' *');
//   console.log('*'.repeat(length + 4));
// }

// printBanner('Welcome to DigitalCrafts');


// // 8. Leetspeak - Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:


// function leetspeak(text) {
//   let leetEquivalent = text
//     .replace(/A/gi, '4')      //Notes - The forward slash indicates the start & end of a regular expression. 
//     .replace(/E/gi, '3')                //The g after the slash is called a flag & it indicates it's a global search. Cont...
//     .replace(/G/gi, '6')                //The i after the slash is called a flag & it indicates it's a case-insensitive search.
//     .replace(/I/gi, '1')                //There are other search flag letters as well. You don't have to do flag searches...
//     .replace(/C/gi, '0')                // but it doesn't hurt & can be helpful. 
//     .replace(/S/gi, '5')                //https://stackoverflow.com/questions/15661969/what-does-the-forward-slash-mean-within-a-javascript-regular-expression/15662100
//     .replace(/T/gi, '7')
//     .toUpperCase();     //Note - The converted text looked odd being lowercase so I changed it to uppercase for an easier read.

//   return leetEquivalent;
// }
// console.log(leetspeak('I am a leet programming haxor'));


// // 9. Long-long Vowels - Write a function, which is given a string, return the result of extending any long vowels 
// to the length of 5.


// function longLongVowels(input) {
//   let extendedVowelString = input
//     .replace(/aa/, 'aaaaa')
//     .replace(/ee/, 'eeeee')
//     .replace(/ii/, 'iiiii')
//     .replace(/oo/, 'ooooo')
//     .replace(/uu/, 'uuuuu')
//     ;
//   return extendedVowelString;
// }
// console.log(longLongVowels('Cheese'));

// // 10.  Just the positives - Write a function positiveNumbers which is given an array of numbers and returns 
// a new array containing only the positive numbers within the given array.


// function positiveNumbers(array) {
//   newArray = array.sort();
//   while (true) {
//     if (newArray[0] < 0) {
//       newArray.shift();
//     } else {
//       break;
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// positiveNumbers([1, -3, 5, -3, 0]);

// ////11. Caesar Cipher - Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

// //I worked on the Caesar Cipher problems 11 & 12 but all I did was confuse myself. I'll come back to these with fresh eyes & see if I...
// // can figure these out. When we did these the first time around they gave me an issue.


// ////12. Caesar Cipher 2 - Write a function decipher which is given a string, an offset, and returns the original message.











