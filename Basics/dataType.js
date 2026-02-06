"use strict" //treat all js code as newer version
// alert("hello"); //we are using nodejs not browser
//  let name="priyanshi"
//  let age = 20
//  let isLoggedIn = false
 //number => 2 to power 53
  //bigint //big value
  //string =>""
  //boolean => true/false
  //null => standlone value
  //undefined =>
    //symbol => to find uniqueness


  //object
  // console.log(typeof"Priya");
  // console.log(typeof age);
  // console.log(typeof null); //object
  // console.log(typeof undefined); //undefined
  
//for interview purpose
//primitive datatype
//7 category
//string,number,boolean,null,undefined,symbol,BigInt

// const score = 100
// const scoreVal = 100.3
// const isLoggedIn= true
// const outSideTemp = null;
// let userEmail;
// const id = Symbol('123')
const bigNumber = 23456732n



//Reference type (Non primitive)
//arrays,objects,functions
//Arrays declaration
const heros =["shaktiman","naagraj"]

//declare of an object
let obj =
{
  name:"hitest",
  age :22,
}
//function
const myFunction =function(){
 console.log("hello");
 
}

//easily find typetype
console.log(typeof bigNumber);

//*********************** */
//stack (primitive),Heap (Non primitive)
// let myYouTube = hitesh
// let anothername = myYouTube
// anothername = "chai aur code"
// console.log(myYouTube);
// console.log(anothername);


let user ={
   emial:"user@gmail.com",
   upi:"user@yble"
}
let userTwo = user
userTwo.email ="priyanshi@google.com"
console.log(user.email);
console.log(userTwo.email);
