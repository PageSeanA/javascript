// var a = 3

// if (true){
//     let a = 4;

//     console.log(a);
// }

// console.log(a);

// let i = 0;

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log("outside", i);

// pi = 4;

// const obj = {}

// obj["newKey"] = 4;


// console.log(obj);

// let index = 8;

// let myString = `hello world ${index}`;

// console.log(myString);

// const name = 'Tiger'
// const age = 13;

// console.log(`My cat's name is ${name} and his age is ${age}.`);

// let today = new Date();

// let a = 4

// let b = 5

// console.log(today.toDateString());


// console.log(`Today's date is ${today.toLocaleDateString}`);

// console.log('Today's date is ${today.getMonth}`);

// let myArray = [4, "hello", 3, 2, 1];

// let [a, b, c, d, e] = [4, 7, 3, 2, 1];

// let [a, b, c, d, e] = myArray

// let [a, b, c] = myArray

// console.log(a);

// console.log(b);

// console.log(c);

// console.log(f);

// let a = myArry[0];  //4

// let b = myArray[1];  //7

// let b = myArray[2];  //3


// var luke = {occupation: 'jedi', father: 'anakin'};

// let{occupation, father} = luke;

// let {occupation: 'jedi', father: 'anakin'} = ????

// console.log(occupation);

// console.log(father);

// let job = luke["occupation"];

// let father = luke.father;

// Arrow Functions***

// funciton helloWorld() {}

// let helloWorld = ()=> {
//     console.log("Hello World");
// }


// let myFunction = ()=> {
//     console.log("new function");

//     // let add
// }

// helloWorld();

// myFunction();


// setTimeout(function(){

//     console.log("hello world");
// }, 1000)

// console.log("print off first");


// function getType() {
//     console.log('Type is: ' + this.type);
//   }

//   console.log(getType());

// let nums = [5, 7, 3, 4, 9];

// let newArray = nums.map(function(num))

// let newArray = nums.map((num, a)=>{

//     return num * 2
// })

// console.log(nums);

// console.log(newArray);


let obj = {

    x: 5,
    y: 20,
    z:3
}

//create a function called multiply 5 * 20 * 3

// let multiply = (object) => {

// let {x, y, z} = object;

// return x * y * z;
// }

// console.log(multiply(obj));

// let div = document.getElementById('myId');

// div.addEventListener('click', (e) =>){

// })

// //es 5
// let addTwoNumbers = (a, b) =>{               //slide 22/29

//     a = a || 0;
//     b = b || 0;

//     return a + b;

// }  //***Got an error when I tried to run this.***

// let result addTwoNumbers(2)

// console.log(result);

//es 6

// let addTwoNumbers = (a=0, b=0)=>{
//     return a + b;

// }

// console.log(addTwoNumbers(3,5));

// console.log(addTwoNumbers(3));
// console.log(addTwoNumbers());

// let multiplyNums = ()=>{                //slide 23/29

// for(let i = 0; i<= arguments.length; i++){

//     console.log(arguments[i]);
// // }
// let multiplyNums =  (...args)=>{
    
//     let m = 1;

//     for(let i of args){
//         m = m * 1;
//     }

//     console.log(m);

// }

// multiplyNums(4, 6, 7, 9, 67)

// let array1 = [5, 7, 8, 4, 3]

// let arry2 = [...array1]

// array2.push(5);
// array2.push(7);

// console.log(array1);
// console.log(array2);

// let a, b, c, d, arr;

// a = [1,2];

// b = [3,4];

// c = [5,6];

// arr = [0, ...a, ...b, ...c, 7, 8];

// console.log(arr);


//Swap value

// let a, b;

// a = 'first';
// b = 'second';

// [b,a] = [a,b]

// console.log(a);

// console.log(b);

//Conditional (ternary) operator

// let a = 4;

// if(a ==4){
//     console.log(`a is equal to 4`);
// }
// else{
//     console.log(`a is not equal to 4';`);


//(condition)? (true block): (else block) One or the other. If or else. source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// (a==4)? console.log(`a is equal to 4`):console.log(`a is not equal to 4';`);

//(condition)? (true block) ? (false block)]]

//Constructors******

// class Person {
//     constructor(firstName, lastName, age) {
//         super();                                       //super() is required.
//         this.firstName = firstName;   
//         this.lastName = lastName;                  //this is .self
//         this.age = age;
//         this.count = 0;
//     }
// greeting(){


//     console.log(`Hello ${this.firstName} ${this.lastName}!`);

//     this.count = this.count + 1;

// }

// printCount(){
//     console.log(this.count);
// }
// }

// //     incrementAge() {
// //       this.age += 1;
// //     }
// //   }


                                        //****RPG Game in javascript****\\


// class Character{
//     constructor(health, power){
//         this.health = health;
//         this.power = power;
//     }
//     attack = (enemy) => {
//         enemy.health -= this.power;
//     }
//     print = ()=>{
//         console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}`);
//     }
// }
// class Hero extends Character{
//     constructor(health, power){
//         super(health, power);
//         this.name = "hero";
//     }
// }
// class Goblin extends Character{
//     constructor(health, power){
//         super(health, power);
//         this.name = "goblin";
//     }
// }
// let hero = new Hero(10, 4);
// let goblin = new Goblin(8, 5);

// hero.attack(goblin);
// goblin.attack(hero)
// hero.print();



// class Todos{
//     constructor(description){
//         this.description = description;
//     }
// }
// class TodosManager{
//     constructor(){
//         this.todoArray = []
//     }
//     addTodo = (descripton) => {
//         let todo = new Todos(description);
//         this.todoArray.push(todo);
//     }
//     displayTodos = () =>{
//         //DOM logic to display todos on page
//     }
// }
// let manger = new TodosManager();
// manger.addTodo(description)