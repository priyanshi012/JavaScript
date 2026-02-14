function sayMyName(){
    console.log("priyanshi");
    
}
sayMyName()

function loginUser(username){
    if(username=== undefined){
        console.log("please enter a username");
        return
    }
  return `${username} just Logged in`
}
console.log(loginUser())
