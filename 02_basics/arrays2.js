const marvel = ["spider-Man", "Black-Panther", "Thor"];
const dc = ["Bat-Man", "Flash", "Wonder-Woman"];

const allHeroes = marvel.concat(dc);
console.log(allHeroes);

//another method
//spread operator
//...---spread Operator

const allNewHeroes = [...marvel, ...dc];
console.log(allHeroes);

//flat method----flat(depth)---flat(Infinity)

const messedArray = [1, 2, [1, 2, 3], 34, 4, [1, 1, 32, [1, 3, 54]]];
const combinedArray = messedArray.flat(Infinity);
console.log(combinedArray);

//to convert to array
console.log(Array.from("Rizwaan"));
//interesting interview cases

console.log(Array.from({ name: "Rizwaan" }));

//another method

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
