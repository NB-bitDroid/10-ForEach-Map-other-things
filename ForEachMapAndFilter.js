//the map() method in javascript is used to loop through an array and apply a function to each element
//it then returns a new array with the results

let numbers = [1, 2, 3, 4, 5];
//map structure:
//newArray = someArray.map(function(element, index, array){})

let squares = numbers.map((elem) => {
    let sq = elem * elem;
    return sq;
});

console.log(squares);

let cubes = numbers.map((elem) => elem * elem * elem); //one command implicit return

console.log(cubes);

const names = [
    "Bennett",
    "Glen",
    "Draven",
    "Nicholas",
    "Aidan",
    "Michael",
    "Alex",
    "Danylo",
];

const upperCased = names.map((elem, idx) => {
    console.log(`The student at index ${idx} is ${elem}`);
    return elem.toUpperCase();
});
console.log(upperCased);