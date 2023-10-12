const helloObj = new Object();//singleton object

const hello = {};//non singleton Object

hello.id = "123abs";
hello.name = "Rizwaan";
hello.isLoggedIn = false;

console.log(hello);

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rizwaan",
            lastName: "Ansari"
        }
    }
}
console.log(regularUser);

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}
//to combine

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);//{}denotes empty object


//mostly used (use spread operator)

const obj4 = {...obj1,...obj2};
console.log(obj4);

//to get all the keys
console.log(Object.keys(hello));
//to get the values
console.log(Object.values(hello));

//entries method--converts all the keys and values to arrays
console.log(Object.entries(hello));


//to check whether property/value/keys exitss 
console.log(hello.hasOwnProperty('isLoggedIn'));

const course = {
    courseName:"Javascript",
    price:"2000",
    courseInstructor:"Rizwaan"
}

//another syntax to extract values(desstructuring an object)
const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);


//JSON Object

// {
//     "name":"Rizwaan",
//     "course":"Javascript",
//     "price":"Free",
// }
