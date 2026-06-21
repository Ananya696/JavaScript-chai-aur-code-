"use strict"; //treat all js code as newer version of js

// alert("Hello..Whatsaupp?")

console.log(3+             
    3)//code readability must be high


//Number-> -(2^53)-1 to (2^53)-1///contains float ,double ,int ,etc

// BigInt-> beyond (2^53)-1...always end with n

// String-> single quote or double quotes

// Boolean-> true/false

//symbol->uniqueness find krne ke liye use hota hai

//null->standalone value..value given as null

//undefined->when no value is given/assigned

//object

console.log(typeof(1234567890123456789012344867890n));


console.log(typeof(null))

console.log(typeof(undefined))

let marks=null;
// let score=BigInt(marks) //TypeError: Cannot convert null to a BigInt
let score=Number(marks) 
console.log(score)

let n="3358fjgdh"
let p=Number(n)
console.log(p)













let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3); 
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh" 

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion