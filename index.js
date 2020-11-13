// My own module
const { favFoods } = require("./nodeModule");

console.log(favFoods());

// Chalk module
const chalk = require('chalk');

console.log(chalk.red('Hello world!'));

console.log(chalk.green(
    'My favorite color is green' +
    chalk.blue.underline.bold(' but I also really like blue') +
    ' but green is still #1.'
));

const error = chalk.bold.red;
const warning = chalk.keyword('red');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

//jshint

// const jshint = require('jshint' 2.12.0);

// const pets = ['piper', 'stella'

// function mypets() {
//     for (i = 0 )
// }

// i didnt do the rest of the function and array to show that the plugin works

// arr-diff
var diff = require('arr-diff');

var a = ['a', 'b', 'c', 'd'];
var b = ['b', 'c'];

console.log(diff(a, b))

var people = ['stella', 'brody', 'haley', 'ziggy'];
var animals = ['stella', 'ziggy'];

console.log(diff(people, animals));

//easymath
var emjs = require('easy-math.js')

console.log(emjs.add(26.87, 12.45));

console.log(emjs.multiply(56.74, 0.98));