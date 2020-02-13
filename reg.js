// REGULAR EXPERSSIONS

// let regex = new RegExp('digital crafts'); 
// //or// 
// let regex2 = /digital crafts/;

// let someString = " fjdkfjd digital crafts fjkjfkdjfdlkj kfjdkfdlkfjd lfjdlkfjd lkfjdlkf jldk";

// let result = regex.exec(someString);

// console.log(result);


// let regex = new RegExp('digital crafts'); 
//or// 
// let pattern = /Sean Page/ig;

// let someString = " dkdjfdkfdj  fkfjdkfjdk seadfdff   pakfdfkdkfkdge   Sean page fjkjfkdjfdlkj  lkfjdlkf jldk";

// let result = pattern.exec(someString);

// console.log(result);

// someString.match(pattern);

// let arr = someString.match(pattern);

// let arr2 = someString.replace(pattern, "Azel")

// console.log(arr);


// let pattern = /Batman | Tina Fey/ig;

// let str = "Austin is really cool but not as cool as Tina Fey.";

// let result = str.match(pattern)

// console.log(result);

// 333-333-3333
// let phonePattern = /(\d\d\d)-\d\d\d-(\d\d\d\d)/g;
// // let phonePattern = /(\d\d\d)-/

// let someString = "fkjkjdfkdjfkdj dfjdkfjdkf jdk kfdjkfdj d 760-458-5929 fkgjkfgjkj kfjdkjfdlf dkfjdkj dkfd kfjdkfjd 333-333-2134";

// let result = someString.match(phonePattern);

// console.log(result);


// let pattern = /\d\d\d(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/g

// let str = "this is a phone number : 333-333-3333";

// let result = str.match(pattern);

// console.log(result);

// let pattern = /Bat(wo)+man/g;
// let str = "Batman Batwoman Batwowowoowowowowoman fkjdkfjkd fjdkfjdkfj jfkdjkfdj"
// // let str1 = "The Adventures of Batman";
// // let str2 = "The Adventures of Batwoman";
// // let str3 = "The Adventures of Batwowowowoman";
// let result = str.match(pattern);

// let pattern = /a{2,5}/;

// //aa aaa aaaa aaaaa/

// let str = "b aa brand new world";

// console.log(pattern.test(str));

// let result = str.match(pattern);

// console.log(result);

let pattern =/\s\s/g
let str = "This  is avery  long day.";

let result = str.replace(pattern, " ");

console.log(result);





