//array

const myArr = [0, 1 ,2 ,3, true, "Rizwaan"];
const myArr2 = new Array (1,2,3,4);


console.log(myArr[0]);

//Array Methods

myArr.push(6);//adds to the end of the array
console.log(myArr);

myArr.pop();//removes the last element


myArr.unshift(9);//adds to the beginning of the array
myArr.shift();//removes from the beginning of the array
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

const newArr = myArr.join();//converts an array to string

console.log(typeof(newArr));

//slice  splice
//slice--returns a section of an array

const myn = myArr.slice(1, 3);
console.log(myn);
//splice manipulates the original array whereas slice does not manipulates the main array
const myn2 = myArr.splice(1, 3);
console.log(myn2);