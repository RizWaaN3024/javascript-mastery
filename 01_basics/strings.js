const name = "Rizwaan";
const repoCount = 3;
console.log(name + repoCount);

//modern day technique String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way to create String
const gameName = new String('Rizwaan');//String Object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const stringTwo = "   Hello   ";
console.log(stringTwo.trim());
console.log(stringTwo.includes('l'));

//Convert String to arrays

console.log(gameName.split(' '));