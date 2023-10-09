//Primitive Datatypes(all datatypes are call by value)
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference Types(Non Primitive datatypes)

//References are allocated in memory
//Array, Objects, Functions

const bigNumber = 122342353456365n;
let userEmail;
const userName="Rizwaan";
const age = 12;
const isLoggedIn = false;


console.log(typeof(bigNumber));
const outsideTemp = null;

console.log(typeof(outsideTemp));

const myFunction = function(){
    console.log("summary");
}


//Memory********************************************

//Stack(USed in Primitive Types) , Heap (Used in Non Primitive Types)
let name = "Rizwaan";
let anotherName = "Sahil";
name = "ansari";
console.log(name);
console.log(anotherName);

let userOne = {
    name:"rizwaan",
    age:12,
}
userTwo = userOne;
console.log(userTwo);
userTwo.age = 18;
console.log(userTwo);

