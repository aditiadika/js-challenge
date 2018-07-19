// TYPE 1: NON-ARRAY GENERATING ITERATOR FUNCTION
// Iterator that doesn't return an Array 

// Example Array
var nums = [3,1,3,100,4,200];
// Array.sort() function will try to sort using compare function as argument
function compare(num1, num2) {
    return num1 - num2
}
// see the result
console.log(nums.sort(compare));

// Array.forEach() will run function to the every member of the array
function square(num) {
    console.log(num*num)
}
// see the result
console.log(nums.forEach(square));

// Array.every() function will return true if all member of array return 
// true when evaluated with the supplied function
function isEven(num) {
    return num % 2 === 0;
}
(nums.every(isEven) ? console.log("true") : console.log("false"));

// Array.reduce() will reduce array to a single value by the provided function argument
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
// see the result
var sum = nums.reduce(add);
console.log(sum);
// TYPE 2: ARRAY-GENERATING ITERATOR FUNCTION
// Iterator that returns an Array 
 
// Array.map function will take each member of array as input to the argument function
function curve(grade) {
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades)
// Array.filter function will return array with member that satisfy boolean statement supplied in the argument function
var evens = nums.filter(isEven);
console.log(evens);