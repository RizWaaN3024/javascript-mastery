//singleton(object made from constructor)

//object literals
//object can be also created by
// Object.create
const mySym = Symbol("key1");
const jsUser = {
    name:"Rizwaan",
    age:21,
    [mySym]:"key1",
    location:"Bangalore",
    email:"rizwaan.ansari@indegene.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","Tuesday"]

}

//how to access 

console.log(jsUser.email);
//another way to access
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(typeof(mySym));

jsUser.email =  "riz@google.com";

//to restrict making changes to any object
// Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS USer");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS USer1 ${this.name}`);
}
//this refers to the current object

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
