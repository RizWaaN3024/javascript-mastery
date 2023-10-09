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