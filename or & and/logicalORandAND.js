// logical OR once it finds truthy value, then it will be the value of variable
const test  = 5 || 6; // 5

const sample = 0 || 20; // 20

// sample with all falsy values
// const sample = 0 || false || null; // null

console.log(test);
console.log(sample);


// logical AND it is the opposite it will find a falsy value and that falsy value will be the value of the variable
const test  = 5 && 6;
const sample = 0 && false && null;

console.log(test); // 6
console.log(sample); // 0