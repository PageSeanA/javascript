/* <script> {
    document.body.innerHTML =
    "Hello World!";
</script>
console.log('Hello World');
// notes
<script defer="defer">
    document.body.innerHTML= 
    "hello world!";
</script>
--------------------------------
// Python             Javascript              
// "Hello!"           "Hello!"
// 'Hello!'           'Hello!'
// """Hello            'Hello
// There!              There'
// """
//                     `
--------------------------------
python
"Hello" + " " + "There"
Javascript
"Hello" + " " + "There"
Concatenation is the same in Javascript and Python
Python
mystring = "hello"
Javascript
var mystring = "hello"
--------------------------------
var veryLongVariableName = "";
// Yes!
var very_long_variable_name = "";
// Nope.
mybool = true;
--------------------------------
var hey = "Hello There";
hey.length
// 11
python
l=length(mystring)
Javascript
var mystring = "hello";
mystring.length
console.log(mystring.length)
---------------------------------
var undefined; //Undefined
var number = 4;
var float = 4.1;
var string = "hello world";
---------------------------------
var number = 4;
var float = 4.1;
----------------------------------
var emptyString = "";
var string = 'This is a string';
var string = "a";
----------------------------------
String Operators
var concat = "hello" + "world"; //helloworld
var concat2 = 4 + "world"; //4world
var length = concat2.length; //6
var indexWorld = concat.indexOf('world'); //5
---------------------------------
Boolean Operators
var boolean = true;
var not = !boolean; //false
var and = boolean && false; //false
var or = boolean || false; // true;
var equals = true == false; //false; }
---------------------------------- */
// Javascript Operators
// true
// false
// !
// ==
// or
// and (&&)
// >>=<<=
// // notes
// // python                       //python          //python        //python        //python
// school = "Dig Crafts";          True                list            dict           print('Hello World')
// // Javascript                  //Javascript      //Javascript     //Javascript      //Javascript
// var school = "dig crafts"       true                array           object          console.log('Hello World')
// )
// -----------------------------------
// if (statement)
// if (age >= 21) {
//     console.log("You get free beer");
//   }
// ------------------------------------
// if - else if - else Statements
// if (age >= 21) {
//   console.log("You get free beer");
// } else if (age < 18) {
//   console.log("What are you even doing here?");
// } else {
//   console.log("Sorry no beer for you");
// }
// --------------------------------------
// Using if/else if blocks
// expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// ---------------------------------------------------------------
// Switch Statement
// switch (expression) {
//     case value1:
//       //Statements executed when the
//       //result of expression matches value1
//       [break;]
//     case value2:
//       //Statements executed when the
//       //result of expression matches value2
//       [break;]
//     ...
//     case valueN:
//       //Statements executed when the
//       //result of expression matches valueN
//       [break;]
//     [default:
//       //Statements executed when none of
//       //the values match the value of the expression
//       [break;]]
//   }
//   ________________________________________________________________
//   switch
//   var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// {/* // notes */}
// _________________________________________________________________
// while (statement){
// code block
// }
// var count = 0;
// while (count < 10){
//     count = count + 1;
//     console.log(count);
// }
// {/* notes */}
// ____________________________________________________________________
// The good ol' while loop, with post-increment
// while (statement){
// code block
// }
// var count = 0;
// while (count < 10) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// }
// {/*  notes */
// ______________________________________________________________________
// The for loop
// for (start; test; increment;){
// code block
// }
// for (var count=0; count < 10; count ++)
// {
//     console.log(count);
// }
// // notes
// ______________________________________________________________________
// A variable assigned to an empty array
// var arrayName = []
// var lottoNums = [];
// // notes
// ______________________________________________________________________
// Array.push()
// Adding values to an array
// var lottoNums = [];
//  lottoNums.push(23);
//  lottoNums.push(11);
//  lottoNums.push(43);
//  lottoNums.push(19);
//  lottoNums.push(37);
//  lottoNums.push(16);
// console.log(lottoNums);
// // [23, 11, 43, 19, 37, 16]
// // notes
// _________________________________________________________________
// A variable assigned to an array of numbers
// var lottoNums = [23, 11, 43, 19, 37, 16];
// // notes
// ________________________________________________________________
// Accessing an element in an array
// arrayName[indexOfArrayElement]
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[0]); //23
// console.log(lottoNums[3]); //19
// No error here:
// console.log(lottoNums[300000]);
// //undefined
// // notes
// _________________________________________________________________
// Reassigning an element in an array
// arrayName[indexOfArrayElement]
// = newValue
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums[0] = 100;
// console.log(lottoNums[0]);
// // notes
// _________________________________________________________________
// Array.pop()
// Removing an element form the end of an array
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums.pop(); //removes *and* returns 16
// var thePoppedNumber = lottoNums.pop();
// console.log(thePoppedNumber); //37;
// // notes
// ________________________________________________________________
// Array.shift()
// Removing an element from the end beginning an array
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var theShiftedNumber = 
// lottoNums.shift();
// console.log(theShiftedNumber); // 23
// // notes
// _________________________________________________________________
// splice(beginI, num)
// Removing an element from the middle of an array
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// var lottoNums = 
// [23, 11, 43, 19, 37 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 1);
// console.log(arrayOfSplicedValues);
// Multiple values
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues); 
// //[43, 19, 47]
// // notes
// ________________________________________________________________
// slice(beginI, endI)
// Removing an element from the middle of an array
// The slice() method returns a shallow copy of a portion of an array into a new 
// array object selected from begin to end (end not included). The original array will not be modified.
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// Multiple values
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// // notes
// _________________________________________________________________
// S.split('separator')
// Converting a string to an array of words
// var words = 
// 'oh hey how is it going'.split('');
// console.log(words);
// // ["oh", "hey", "how", "is", "it", "going"]
// // notes
// ________________________________________________________________
// for
// Looping through an array
// for ([initialization]; [condition]; [final-expression]) statement
// var words = 
// 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }
// // notes
// _________________________________________________________________
// Array.join()
// Putting an array together into a string
// var words = 
// 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }
// console.log(words.join(' '));
// //'oh hey how is it going'
// // notes
// ________________________________________________________________
// S Objects: like a python dictionary, only different
// var objectName {key: value}
// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }
// // notes
// _________________________________________________________________
// Adding a property to an object
// objectName[keyName]
// = newValue
// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// // notes
// ________________________________________________________________
// delete
// Deleting properties from an object
// delete objectName[keyName]
// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// delete characterSheet['title'];
// notes
// _________________________________________________________________
// Dynamic key names
// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var key = 'name';
// console.log(characterSheet[key]);
// notes
// ________________________________________________________________
// Dynamic key names in an array
// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var keys = ['name', 'title', 'powers'];
// for (var i=0; i<keys.length; i++){
//     var keyName = keys[i];
//     console.log(characterSheet[keyName]);
// }
// // notes
// _________________________________________________________________
// Dynamic key names in an array, alternative
// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var keys = ['name', 'title', 'powers'];
// for (var i = 0; i< keys.length; i++){
//     // var keyName = keys[i];
//     //console.log(characterSheet[keyName]);
//     console.log(characterSheet[keys[i]]);
// }
// notes
// ________________________________________________________________
// Obtaining the keys programmatically
// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invernt the word'
// };
// var keyNameList = Object.keys(characterSheet);
// for (var i= 0; i<keyNameList.length; 
//     i++){
//     console.log(characterSheet[keyNameList[i]]);
// }
// // notes
// _________________________________________________________________
// function
// function fname (arguments){
// code block
// }
// function hello (name) {
//     var output = 'Hello ' + name;
//     console.log(output);
//     return output;
//   }
// // notes
// ________________________________________________________________
// Class Example
// var myString = 'hello'
//         console.log(myString)

// var mystring = "hello";
// mystring.length
// console.log(mystring.length)

// var count = 0
// while (count < 10) {
// console.log(count);
// // count = count +1;
// count++
// }

// for(var count = 0; count < 10; count++){

//   console.log(count);

//   for(var inner=0; inner < 3; inner++){

//     console.log(inner);

//   }
// }

// var lottoNum = [];

// lottoNum.push(3)

// console.log(lottoNum);

// lottoNum.push(34);

// console.log(lottoNum);

// lottoNum.pop();

// console.log(lottoNum);

// var lottoNums = [23, 11, 43, 19, 37, 16];

// var newNum = lottoNums.splice(2,2)

// console.log(lottoNums);

// console.log(newNum);

// lottoNums.shift();

// console.log(lottoNums);

// // console.log(lottoNums[20]); 

// lottoNums[1] = 4;
// console.log(lottoNums)

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(1, 5));

// var words = 'oh hey how is it going';

// var newArray = words.split(' ');

// console.log(newArray);

// var words2 = newArray.join(' ');

// console.log(words2);



// var newArry = words.split('how');

// console.log(newArry.pop())

var myArray = [1,2,5,7,3];
for (var i = 0; i < myArray.length; i++){
  myArray[i]
  console.log(  myArray[i]
    );
// // }
// var characterSheet = {
// name: 'tim berners-lee',
// title: 'sir',
// powers: 'invent the web'
// };
// console.log(characterSheet);
// delete characterSheet["title"];
// console.log(characterSheet);

// -----------------------------------------------------------
// 04/05/20

// var liNode = document.getElementById('one');

// var liNode = document.querySelector('#one');

// liNode.className = "cool";

// liNode.textContent = "cool"

// var liNodesArray = document.getElementsByClassName('hot');

// var liNodesArray = document.querySelectorAll('.hot');
// console.log(liNodesArray)

// if (liNodesArray.length > 2){
//     liNodesArray[2].className = "cool";

// }
// for (var index = 0; index < liNodesArray.length; index++){

//     console.log(index)
//     liNodesArray[index].className = "cool";
// }

// var ul = document.createElement('ul');

// var body = document.querySelector('body');

// body.append(ul);

// var li1 = document.createElement('li');

// li1.textContent = "hello";

// ul.append(li1);

// var li2 = document.createElement('li');

// li2.textContent = "hello 2";

// ul.append(li2);


// function createHTMLElement(tagName, parentNode, innerText){

//     var tag = document.createElement(tagName);
//     // var tag = document.createElement('ul')

//     if (innerText.length > 0){
//         tag.textContent = innerText;
//     }
//     parentNode.append(tag);
    
//     return tag;
// }
// var body = document.querySelector('body');


// var ul = createHTMLElement('ul', body, "");

// for (var numTags = 1; numTags <= 1000; numTags++){

//     createHTMLElement("li", ul, `${numTags} Hello`)

// }

// let greeting = function (name){
//     return name;
// } 
// console.log(greeting);

// 8/15

// let add = function(num1, num2){

//     return num1 + num2;
// }

// let subtract = function(num1, num2){

//     return num1 - num2;

// }

// let Multiple = function(num1, num2){

//     return num1 * num2;

// }

// let calc = function(num1, num2, opFunction) {

//     return opFunction(num1, num2)
// }

// let result = calc(3, 4, Multiple)

// console.log(result);

// **let arr = [2,5, 6, 8, 9];
// // let newArr = []

// **let myBoolean = arr.some(function(num){
// return num < 1
// })

// console.log(myBoolean);

// for (let index = 0; index < array.length; index++){


// console.log(array[index]);

// }

// let newArr = arr.map(function(element){

//     return 2 * element;

// })

// console.log(newArr)



//// --------
// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
//     const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let newCompanyList = companies.map(function(company){

//     company['start'] = company.start - 5;

//     return company

// })

// console.log(newCompanyList)

// let arr = [45, 1, 23, -3, 4, -5]

let newCompaniesList = companies.filter(function(company){

return company.category == 'Retail';
})

console.log(newCompaniesList)



//---------

// let arr = [45, 1, 23, -3, 4, -5]

// let newArr = arr.filter(function(arrElement){

// return arrElement < 10;
// })

// console.log(newArr)



// var days = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// days.forEach(function(element){
// console.log(element);

// });

// -------------------------------------Friday---------------------------------------

