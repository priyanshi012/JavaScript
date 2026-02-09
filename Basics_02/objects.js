// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// objects-constructor
const tinderUser = new Object() //but this is a singleton object
//or
tinderUser.id ="123bc"
tinderUser.name ="sunny"
tinderUser.isLoggedIn = false
console.log(tinderUser);
// console.log(tinderUser1);


const regularUser ={
    email:"some@email.com",
    //nested object
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"saini"

        }
    }
}
console.log(regularUser.fullname.userfullname);
