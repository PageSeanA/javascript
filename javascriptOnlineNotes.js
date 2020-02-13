
// Week 4
// JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2019]
// Programming with Mosh
// https://www.youtube.com/watch?v=W6NZfCO5SIk

// console.log('Hello World. How are you?');

// Variables ---------
// var name = 'Mosh';
// console.log(name);

//Constants (Can not reassign contestants. If you need to do so use var/let.) --------

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Primitive/Value Types -------- These types are String, Number, Boolean, and Undefined. ----

// var name = 'Mosh' //String Literal
// var age = 30; //Number Literal 
// var isApproved = true; //Boolean Literal. Used when needing logic. (true or false)
// var firstName = undefined; //undefined Literal. 
// var selectedColors = null;  // 

// Dynamic Typing (Fyi - You can clear the web counsel with Control l).---

// var name = 'Mosh'
// var age = 30; //Number Literal 
// let isApproved = true;
// let firstName = undefined; 
// let selectedColors = null; 

// -------Reference Types are Object, Array, and Function ----

// Object-------

// let name = 'Mosh'; (This is how we've coded this in the past but below is how it's coded in Java.
// let age = 30; Below is a personal object.) 

// let person = {
//     name: 'Mosh',
//     age: 30
// }
// // Two ways of doing this, the Dot Notation & the Bracket Notation. Both are correct.
// //Dot Notation (The Dot Notation is prefer by most coders.)
// person.name = 'John'

// //Bracket Notation
// person['name'] = 'Mary'


// console.log(person);

// Arrays-------- (known as list in Python) Fyi, the brackets are called an Array.
// An Array is data structure that we use to represent a list of items.

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);


//Function ---- (A set of of statements that perform a task or a calculate a value.)
// First we declare the function then give it a name.

// function greet(name, lastName) {          //(name) is the Perimeter.
//     console.log('Hello ' + name + ' ' + lastName);
// }
// //Call the function. 
// greet('John', 'Smith');        // ('John') is a Argument.


// Types of Functions------- 

// //The Function below is performing a task.
// function greet(name, lastName) { 
//     console.log('Hello ' + name + ' ' + lastName);
// }
//     //Calculate and return a value.
// function square(number) {
// return number * number;

// }

// console.log(square(2));

// -------------------------------------------------------------------------------------------------------------------------------

// Week 4
// Selecting & Changing Website Elements (DOM manipulation) - Beau teaches JavaScript
// freeCodeCamp.org
// https://www.youtube.com/watch?v=eaLKqoB9Fu0

// var div1 = document.getElementById('div1');

// var unicycle = document.getElementsByClassName('unicycle');

// var paragraphs = document.getElementsByTagName('p');

// // var queryUnicycle = document.querySelector('#div2');

// var queryUnicycle = document.querySelector('.unicycle');

// var queryAll = document.querySelectorAll('.unicycle, #div2');

// ------

// var text = '<h1>Hello World</h1>';

// div1.innerHTML = text;

// ------

// var text = '<h1>Hello World</h1>';

// queryUnicycle.innerHTML = text;

// ------- To change things in an Array of elements a loop is used.
// It's a security risk to use plan text in innerHTML. It can open
// you up to a Cross Site Scripting Attack. It's best to use
//text content, which inserts the content as raw text. 
//Refer to the next example labeled .textContent. 

// var text = '<h1>Hello World</h1>';

// for(i = 0; i < queryAll.length; ++ i) {
// queryAll[i].innerHTML = text;
// }

// ---------- .TextContent - Note: This example can be done for all the
//examples. 

// var text = '<h1>Hello World</h1>';
// queryUnicycle.textContent = text;

// ---------- 

// -------------------------------------------------------------------------------------------------------------------------------

// Week 4
// DOM Nodes - Beau teaches JavaScript
// freeCodeCamp.org
// https://www.youtube.com/watch?time_continue=1&v=BWVoPxob5DU&feature=emb_logo

                                            //******Note - I wasn't able to get these codes to show up DOM.******

// var para = document.createElement('p');
// var para = document.createTextNode('Up above the world so high');
// para.appendChild(Node)

// var parent = Document.getElementById('div1');
// parent.appendChild(para);

// var para2 = Document.createElement('p');
// para2.innerHTML = 'Like a diamond in the sky'

// var child = document.getElementById('p1');
// parent.insertBefore(para2, child);

// var para3 = Document.createElement('p');
// para3.innerHTML = 'When the blazing sun is gone'
// parent.replaceChild(para3, child);

// parent.removeChild(para3);


// -------------------------------------------------------------------------------------------------------------------------------



















