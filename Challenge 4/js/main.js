"use strict";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];
//Array.proptype.filter()

//FILTRA UN ARRAY Y DEVUELVE OTRO ARRAY IGUAL O MENOR, DEPENDIENDO DE LA CONDICION

//1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
// if (inventor.year >= 1500 && inventor.year <= 1599) {
//   return true; //keep it!
// }

console.log(fifteen);

//Array.proptype.map()

//RECORRE UN ARRAY Y DEVUELVE OTRO CON LA MISMA LONGITUD PERO CON LAS PROPIEDADES QUE LE HEMOS PASADO

const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

//Array.proptype.sort()

//Para ordenar de menor a mayor dos propiedades. Ejemplo: El nombre alfabeticamente, la edad de menor a mayor...
const ordered = inventors.sort(function (a, b) {
  if (a.first > b.first) {
    return 1;
  } else {
    return -1;
  }
});
console.table("hola", ordered);
//Condicioanl ternario, igual que el anterior .SORT
// const ordered=inventors.sort((a,b)=>a.year>b.year?1:-1)

//Array.proptype.reduce()

//Cuantos años han vivido todos los inventores?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//Ordenar los inventors por años vividos

const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if (lastGuy > nextGuy) {
    return -1;
  } else {
    return 1;
  }
});
console.log(oldest);

//Create a list of Boulevards in Paris that contain "de" anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];

// const de = links.map((link) => link.textContent);
// console.log("map", de).filter((streetName) => streetName.includes("de"));

//Sort name by alfabetcally, only an Array not an Object as Usual

const alfabet = people.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(",");
  const [bLast, bFirst] = nextOne.split(",");
  return aLast > bLast ? 1 : -1;
});

console.log(alfabet);

//Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "van",
  "bike",
  "walk",
  "van",
];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
