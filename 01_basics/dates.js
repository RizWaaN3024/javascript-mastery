let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));


let myCreatedDate = new Date(2023, 0, 23);//month starts fromm 0
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myDate.getDate())