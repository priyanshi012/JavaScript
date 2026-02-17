// const user ={
//     username :"priyanshi",
//     price: 999,

//     welcome:function(){
//         console.log(`${this.username},welcome to the website`);
        
//     }
    
// }
// user.welcome()
// console.log(this);

// //this-it refer to the current contest
// //arrow function
// const chai = ()=>{
//     let username="priya"
//     console.log(this.username);
    
// }
// chai()

//Immediately Invoked function Expressions(IIFE)
//global scope ke pollution or we can say that variable se protect krne ke liye use krte h

(function chai(){
    //named IIFE
    console.log(" DB Connected");
    
})();

( ()=>{
    console.log(" DB Connected");
    
})()