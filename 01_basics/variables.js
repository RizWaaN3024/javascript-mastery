const accountId = 12345;//values cant be changed
let accountEmail = "rizwaan@gmail.com";
var accountPassword = 1223124234;

//Prefer not tto use var because of issue in block scope and functional scope
accountEmail = "abcx@gmail.com";
accountPassword = 321635465;

console.table([accountId, accountEmail, accountPassword]);