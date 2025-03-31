const name = "Soumodipta Jana";
const rollNumber = "23MA60R15";

// console.log("Name: "+name + ", Roll Number: "+rollNumber);

// console.log(`Name: ${name}, Roll Number:${rollNumber}`);

const gameName = new String("Gods of Wars");

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('W'));
console.log(gameName.indexOf('w'));

let instituteName = "IIT-KGP";
console.log(instituteName.split('-'));
console.log(instituteName.substring(1,4)); //index 1 to 4, 4 exclusive
console.log(instituteName.slice(1,4));
console.log(instituteName.slice(-6,4));

const newStr = "   Jana     ";
console.log(newStr);
console.log(newStr.trimStart());
console.log(newStr.trimEnd());

console.log(newStr.trim());


const url = "https://jana.com/soumodipta%20jana";
console.log(url);
console.log(url.replace("%20","-"));
 url.replace("%20","-");
console.log(url);
console.log(url.includes("jana"));













