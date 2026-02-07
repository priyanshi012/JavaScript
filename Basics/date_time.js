//dates
let myDate = new Date()
console.log(myDate.toDateString());

console.log(myDate.toLocaleString());
//type of date is object
console.log(typeof myDate);

//months start from 0 in js
// let myCreateDate = new Date(2023,0,23);
// console.log(myCreateDate.toDateString());

// DD-MM then month start with 1

// let myCreateDate = new Date("2026-01-22");
// console.log(myCreateDate.toLocaleString());

//********time stamp */
// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));


// methods 
let newDate = new Date();
console.log(newDate.getMonth()+1);
