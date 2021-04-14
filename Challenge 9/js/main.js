"use strict";
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
const p = document.querySelector(".p");

p.addEventListener("click", makeGreen);

function makeGreen() {
  console.log("me han clickado");
}

//Regular
console.log("hello");
//Interpolated
console.log("hello,I am a ${var}");

//Styled
console.log(
  "%c I am some great text",
  "font-size:50px;background:red;text-shadow:10px 10px 0 blue"
);
//warning
console.warn("oh nooo");
//error
console.error("oh nooo");

//info
console.info("Crocodiles");

//testing
console.assert(1 === 13, "tha is wrong!"); //Si es falso aparece el mensaje, pero si es true no aparecerá nada en la consola
//clearing
console.clear();
//viewing DOM Elements

console.log(p);
console.dir(p);

console.clear();

//Grouping things together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);

  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//counting
console.count("wes");
console.count("wes");
console.count("steve");
console.count("wes");
console.count("wes");
console.count("steve");
console.count("wes");
console.count("steve");

//timing

console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
console.table(dogs);
