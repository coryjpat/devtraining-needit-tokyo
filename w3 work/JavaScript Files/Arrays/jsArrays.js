const cars = ['Saab', 'Volvo', 'BMW'];

let car1 = 'Saab';
let car2 = 'Volvo';
let car3 = 'BMW';

var carsEmpty = [];
carsEmpty[0] = 'Saab';
carsEmpty[1] = 'Volvo';
carsEmpty[2] = 'BMW';

cars[0] = 'Nissan';

carsEmpty.push('Nissan');
carsEmpty.toString();
carsEmpty

console.log(carsEmpty);
console.log(cars);

const person = {
    employID: 10000,
    firstname: 'John',
    lastname: 'Doe',
    age: 41,
    role: 'Senior Software Engineer - ServiceNow'
};


console.log('Thank you ' + person.firstname + ' for accepting the role as our new ' + person.role + ', we look forward to all the great things you will do!');

function myFav() {
    for (var i = 0; i < carsEmpty.length; i++) {
        if (carsEmpty[i] == 'BMW') {
            console.log('BMWs are my favorite car!');
        }
    }
}
myFav();

var numOfcars = carsEmpty.length;
var lastCar = carsEmpty[carsEmpty.length -1]; 
console.log('Number of cars is ' + numOfcars + ' and the last car is a ' + lastCar);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

function fruitsList() {
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);
};

/* Note:
*The concat() method does not change the existing arrays.It always returns a new array.
*
*The concat() method can take any number of array arguments.
*
*Example(Merging Three Arrays) 
****************************************************************************************/

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);



/* The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:
****************************************************************************************/

var points = [40, 100, 1, 5, 25, 10];
//document.getElementById("demo").innerHTML = points;

function myFunction1() {
    points.sort();
    //document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
    points.sort(function (a, b) { return a - b });
    //document.getElementById("demo").innerHTML = points;
}


var points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
var carentry = cars.entries().toString();
console.log(carentry);