//block scope 
// if(true){
//     let a =10;
//     const b = 20;
//      var c = 30
// }
// console.log(c)
// //var is not widely used

// //nested scope
//  function one(){
//     const username = "priyanshi"
//     function two(){
//         const website ="youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two();
//  }
//  one()

//**********interesting******* */
// console.log( addone(5)); // we can also call fn here
//  function addone(num){
//    return num+1
//  }


add(3) // not used here
 const add = function(num){
    return num+2
 }