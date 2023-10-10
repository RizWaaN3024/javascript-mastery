const score = 900;

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(1));


const numberTwo = 23.345345;

console.log(numberTwo.toPrecision(3));//returns a string


const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));

//************************Maths***************** */
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.min(4,8,5,4,7,2));
console.log(Math.random());//values will always come in between 0 and 1
