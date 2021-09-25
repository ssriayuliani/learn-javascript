/*
    ->  All elements with primitive types like numbers, strings, and boolean are deep copied 
    ->  which means that the copied element and the original are not connected and any change won’t affect the original element.
*/

// shallow copy sample
const orig = ['avocado', 'apple', { name: 'strawberry' }];
const copy = orig.slice();
copy.push('guava');
copy[2].name = 'coconut';

console.log('orig', orig);  //orig [ 'avocado', 'apple', { name: 'coconut' } ]
console.log('copy:', copy); //copy: [ 'avocado', 'apple', { name: 'coconut' }, 'guava' ]


// deep copy sample
const fruits = ['avocado', 'apple', { name: 'strawberry' }];
const copyf = JSON.parse(JSON.stringify(fruits));
copyf[2].name = 'coconut';

console.log('fruits', fruits);  //fruits [ 'avocado', 'apple', { name: 'strawberry' } ]
console.log('copy:', copyf);    //copy: [ 'avocado', 'apple', { name: 'coconut' } ]