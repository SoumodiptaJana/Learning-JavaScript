// const users = {
//     name:"Soumodipta",
//     "full name":"Soumodipta Jana",
//     age:18,
//     location:"West Bengal",
//     isLoggedIn:false
// }

// console.log(users.name);
// console.log(users["full name"]);



// using symbol inside object

// const mySym = Symbol("key1")
// const users = {
//     name:"Soumodipta",
//     "full name":"Soumodipta Jana",
//     [mySym]:"mykey1",//to use as a symbol
//     age:18,
//     location:"West Bengal",
//     isLoggedIn:false
// }

// console.log(users[mySym]);
// console.log(typeof users[mySym]);
// users.age=25;
// console.log(users.age);
// //to not allow any change freeze it
// Object.freeze(users);
// users.age=30;
// console.log(users);




// const tinderUser = new Object();
// const tinderUser = {};

// tinderUser.id="ndv28e";
// tinderUser.name="jenbvd";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// const regularUser = {
//     email:"admvd@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName:"Suman",
//             lastName:"Jana"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName);


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {5:"c",6:"d"}


// console.log({...obj1,...obj2,...obj3});
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));


