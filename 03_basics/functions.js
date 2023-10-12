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