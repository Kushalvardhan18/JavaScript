// let myName = "Kushal    "
// console.log(myName.length);
// console.log(myName.trueLength);


let myHeros = ["kushal","thor","spiderman"]

let heroPower ={
    kushal :"kushal",
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function () {
        console.log(`spider power is ${this.spiderman}`);
    }
}
Object.prototype.vardhan =function(){
    console.log(`Vardhan is present in all objects`);
}
Array.prototype.heyVardhan =function(){
    console.log(`Mr. Vardhan says hello`);
}
// heroPower.vardhan()
myHeros.vardhan()
myHeros.heyVardhan()
// heroPower.heyVardhan()


// inheritance
const user={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makeVideo :true,
}
const TeachingSupport={
    isAvaliable :false,
}
const TASupport={
    makeAssignment :'JS Assignment',
    fullTime :true,
    __proto__:TeachingSupport

}
Teacher.__proto__ = user
 
//Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "kushalVardhan              "
String.prototype.truelength=function(){
console.log(`${this}`);
console.log(`true length is ${this.trim().length}`);
}
anotherUsername.truelength()

"kushal".truelength()
"iceTea   ".truelength()