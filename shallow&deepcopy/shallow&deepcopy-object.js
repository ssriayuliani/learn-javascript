// shallow copy 
const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            county: 'country'
        },
        name: 'myObject'
    }, 
    hello: 'hello'
}

const copy = Object.assign({}, orig);

// orig and copy have the diffrent value of test and hello (properties)
copy.test = 'newTest';
copy.hello = 'sayonara'

// orig and copy have the same value of userDetails.name (properties)
copy.userDetails.name = 'newName'; 

console.log('orig:', orig);
console.log('copy:', copy);

// deep copy sample
const User = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            county: 'country'
        },
        name: 'myObject'
    },
    myFn: () => {},
    undef: undefined
}

const copyU = JSON.parse(JSON.stringify(User));
// json not 
copyU.userDetails.name = 'newName';

console.log('orig:', User);
console.log('copy:', copyU);