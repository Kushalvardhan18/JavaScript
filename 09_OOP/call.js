function setUsername(username){
    //complex DB calls
   this.username = username;
    console.log("called");
    
}
function createUser(username,email,passowrd){
    setUsername.call(this,username)
    this.email = email;
    this.passowrd = passowrd;
}

const chai = new createUser("chai","chai@example.com","123")
console.log(chai);
