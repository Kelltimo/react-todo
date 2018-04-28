// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikhram'];
// var final = [
//   3, ...groupA
// ];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew you are 25

function name(a, b) {
  return "Hi " + a + " you are " + b;
}

console.log(name(...person));
console.log(name(...personTwo));

var names = ['Mike', 'Ben'];
var final = [
  'Tim', ...names
];

final.forEach(function(name) {
  console.log('HI ' + name);
});
//HI MIKE