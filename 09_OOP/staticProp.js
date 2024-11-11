class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
   static createId(){
        return `123`
    }
}
const kushal = new User("Kushal")
// console.log(kushal.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}
const iPhone = new Teacher("iPhone","i@phone.com")
iPhone.createId();
