const user = {
    userName: "Kushal",
    loginCount: 22,
    signedIn: true, 
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username :${this.userName}`);
        // console.log(this);
        
        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());


function user(userName,loginCount,isLoggedIn) {
  this.userName = userName
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn
  return this
} 
//Constructor function gives new instnace every single time
const userOne = new user("kushal",12,true)
const usertwo = new user("vardhan",11,false)
console.log(userOne);
console.log(usertwo);
