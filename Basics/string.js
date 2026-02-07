console.log("hello");
const name ="priyanshi"
const repoCount = 50

//outdated
// console.log(name +" "+ repoCount +" "+"value");

//modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//with the help of object
const gameName = new String('priya');

console.log(gameName);
//access index vise
console.log(gameName[0]);
console.log(gameName.__proto__);
//length of the string
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,3);
console.log(anotherString);

//trim for remove spaces

//use replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'));

//split
console.log();
