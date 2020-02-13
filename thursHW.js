// Medium

// Positive Numbers - Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array. -->

// let arr = [0, 2, -1, 8, 17, -5]
// let newArr = arr.filter(function(arrPositiveElement) {
//     return arrPositiveElement > 0;
// })
// console.log(newArr)


// 2. Even Numbers - Write a function which takes an array of numbers as input and returns a new array containing 
// only the even numbers in the given array.

// let arr = [0, 5, 4, 6, 5, 10]
// let newArr = arr.filter(function(arrEvenElement) {
//     if (arrEvenElement % 2 == 0) {
//         return arrEvenElement}
// })

// console.log(newArr)

// 3. Square The Numbers - Write a function which takes an array of numbers as input and returns a new array 
// containing result of squaring each of the numbers in the given array by two. 
// Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// let arr = [1, 2, 3];
// let newArr = arr.map(num => num ** 2);
// console.log(newArr);

// //4. Cities 1
// Write a function which takes an array of city objects like as input and returns 
// a new array containing the cities whose temperature is cooler than 70 degrees.

// let cities = [
// { name: 'Los Angeles', temperature: 60.0},
// { name: 'Atlanta', temperature: 52.0 },
// { name: 'Detroit', temperature: 48.0 },
// { name: 'New York', temperature: 80.0 } ];


// let coolerCity = cities.filter(function (city) {
//     if (city.temperature < 70.0) {
//         return city
//     }
// })
// console.log(coolerCity)

//5. Cities 2 - Write a function which takes an array of city objects like the above problem as input
//  and returns an array of the cities names.

// cities.forEach(function (city) {
//     console.log(city.name)
// })
  
//6. Good Job! - Print out 'Good Job, !' for each person's name, one on a line.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// people.forEach(function(element){
//     console.log(element + '!');
// })

//7. Sort an array - Given an array of strings such the array of names given in the previous problem,
// sort them by alphabetically order.

// people.sort();
// console.log(people)

//8. Sort an array2- Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

// people.sort(function (x, y) {  //Note - To arranged from largest to smallest/longest to shortest flip the variables. ex: (y, x.)
//     return x.length - y.length; 
// });

// console.log(people)


// ----------------------------------------------------------------------------------------

//9. Sort an array, 3 - Given an array of array of numbers like:

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];
    
//     Sort the array by the sum of each inner array. For the above example, the respective
//     sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ]



// Unsure, I know we have give a sum for each array then sort them but I'm at a lost how to do it. I'll retry this one later. 

//10. 3 Times - Given this function, use the call3Times function to print "Hello, world!" 3 times.

//function call3Times(fun) { fun(); fun(); fun(); }

// function call3Times('Hello, world!') { 'Hello World'(); fun(); fun(); }


function call3Times(fun) { fun(); fun(); fun(); }

????

{console.log("Hello, world!")};





// 11. n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. 
// It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.


// 12. Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. 
// Use the reduce method to do this.

// > sum([1, 2, 3])
// 6


// 13. Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. 
// Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'
