function myName() {
    console.log("Rizwaan");
}
myName();//reference


function addTwoNumbers(num1, num2)//parameters
{
    console.log(num1 + num2);
}
addTwoNumbers(3, 4);//arguments
const result = addTwoNumbers(3, 5);
console.log("Result:  ", result);

function loginMessage(userName) {
    return `${userName}  just Logged In`;

}

function user(userName){
    if(!userName)//equivalent to if(userName ===undefined)
    {
        return `${userName}`;
    }
}

console.log(loginMessage("Rizwaan"));

//when u dont know how many parameters user is going to enter (Rest Operator)
function calculateCartPrice(...num1){
    return num1;

}
console.log(calculateCartPrice(200,400,500,600));
//(...)--rest operator returns an array

//pass objects to functions

const userTwo = {
    name:"Rizwaan",
    age:21
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(userTwo);