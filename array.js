
// const arr = [0,6,4,2,6,5];
// console.log(arr);
// console.log(arr[2]);

// const myHeros = ["CR7","Messi","Max Varstapen"]
// console.log(myHeros[2]);
// console.log(myHeros.length);
// myHeros.push("Valentino Rossi");
// console.log(myHeros);
// console.log(myHeros.pop());
// console.log(myHeros);
// myHeros.unshift("Albert Einstain");
// myHeros.shift();
// console.log(myHeros);


// const arr = [5,6,7,8,9];
// console.log(arr.includes(7));
// console.log(arr.includes(10));
// console.log(arr.indexOf(7));


//slice,splice --> read about their difference
// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// let new_cars = cars.slice(1, 4);
// console.log("cars :", cars);
// console.log("new_cars :", new_cars);

// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire','Creata'];
// console.log(cars.splice(1,4));
// console.log("cars :", cars);



// const real_players = ["Mbappe","Vini Jr.","Rodrigo","Jude","Modric","Valverde"];
// const barca_players = ["Lewendoski","Raphinha","Yamal","Gavi","Pedri","De Jong"];

// real_players.push(barca_players);
// console.log(real_players);

// const allPlayers = real_players.concat(barca_players);
// console.log(allPlayers);


// const allPlayers = [...barca_players,...real_players]
// console.log(allPlayers);



// const arr = [1,2,4,[6,8,9,[12,15,17,[20,25,30]],56]]
// const real_another_array = arr.flat(Infinity);
// const real_another_array = arr.flat(1);
// const real_another_array = arr.flat(2);
// const real_another_array = arr.flat(3);
// const real_another_array = arr.flat(4);
// console.log(real_another_array);


// console.log(Array.isArray("Soumodipta"));
// console.log(Array.from("Soumodipta"));
// console.log(Array.from({name:"Soumodipta"}));// return [], interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));








