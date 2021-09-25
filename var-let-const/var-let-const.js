/*  var
    ->  var declarations are globally scoped or function/locally scoped. 
    ->  variable that is declared with var outside a function block is available for use in the whole window. 
    ->  can be re-declared and updated
    ->  hoisting 
        variables and function declarations are moved to the top of their scope before code execution
*/
/*  let
    ->  block scoped
            A block is a chunk of code bounded by {}
    ->  can be updated but cannot be re-declared  within its scope
    ->  Hoisting
        Unlike var which is initialized as undefined, the let keyword is not initialized
*/
/*  const 
    ->   cannot be updated 
    ->   must be initialized at the time of declaration.
    ->   const object cannot be updated, the properties of this objects can be updated.

*/

// hoisting 
console.log(test);  //not return an error but return undefined
var test = 'test';

// interpreted as this
var test;
console.log(test); // test is undefined
test = "test"

// error on let/const
console.log(test);
let test = 'test';
const test = 'test';

// hoisting with function
test();

function test() {
    console.log('im a function');
}

// scope example
function test() {
    var nice = 'nice'
}
console.log(nice);

// block scope - change var to let/const
if (true) {
    var test = 'test';
}
console.log(test);

// for loop example - to fix this use let
for(var i=0; i<3; i++) {
    setTimeout(() => {
        alert(i);
    }, 500);
}

// or use function factory
for(var i=0; i<3; i++) {
    (function test(o){
        alert(o);
    })(i)
}