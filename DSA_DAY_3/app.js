

// Math functions and problems

//Math.abs : - convert negative value into positive

console.log(Math.abs(-10));

//Math.ceil : - Math.ceil() = upar wali integer value deta hai
// (Decimal ko next bigger integer bana deta hai)

console.log(Math.ceil(10.11));

//Math.florr : - neeche wali integer value deta hai

console.log(Math.floor(20.346));

//Math.round() = nearest integer pe round karta hai

// .5 ya usse zyada → upar
// .5 se kam → neeche


console.log(Math.round(12.4));

//Math.trunc = sirf decimal hata deta hai

console.log(Math.trunc(34.74347634764));


//Math.pow(a, b) = a ki power b


console.log(Math.pow(5,7));


//Math.max() = sabse bada number deta hai

console.log(Math.max(324,23,46,67));

//Math.random() ek random value generate karke deta hain 0 se 1 ke bich me 

//Math.sqrt() JavaScript ka built-in method hai jo kisi number ka square root nikalta hai.

console.log(Math.sqrt(16));

//Math.min() : multiple numbers me se smallest value deta hai.



//Que calculate compund of interest

// let prompt = require("prompt-sync")()

// let p = prompt("Enter principle")

// let r = prompt("enter rate of interest")

// let t = prompt("enter time")




// console.log((p*Math.pow(1+(r/100) ,t)-p).toFixed(2));


// otp 

console.log(Math.trunc(Math.random()*9000+1000));


//Que : area of triangle by herons formula



let a = 5 ;
let b = 6;
let c = 7;
let s = (5+6+7)/2

console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));

//Que : circumference of circle

//C=2πr

//C = circumference
// r = radius
// π (pi) ≈ 3.14

let r = 7;

c = (2 *Math.PI * 7)

console.log(c.toFixed(2));









