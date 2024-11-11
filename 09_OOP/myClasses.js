// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    encyptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("kushalVardhan", "k@123.com","123")
console.log(chai.encyptPassword());
console.log(chai.changeUsername());

//Behind the scene
function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User2.prototype.encyptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User2("kushal", "k@123.com","123")
console.log(tea.encyptPassword());
console.log(tea.changeUsername());

