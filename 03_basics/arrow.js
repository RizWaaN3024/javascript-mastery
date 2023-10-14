const user = {
    userName: "Rizwaan",
    price: "100",

    welcomeMessage: function () {
        console.log(`${this.userName},  welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage();

console.log(this);//will return empty object


function one() {
    console.log(this);
}


//Arrow Function
//const chai = function(){}
//to make arrow function remove the function keyword and arrows after the parenthesis
const chai = () => {


}

const addTwo = (num1, num2) => {
    return num1 + num2;

}
//while using {} return keyword is mandatory and whileusing () return statement is not required
console.log(addTwo(5, 7));

const subtractTwo = (num1, num2) => (num1 - num2);