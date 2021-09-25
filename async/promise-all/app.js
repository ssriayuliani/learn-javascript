const { checkAvailability } = require('./library.js');

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Favorite Supply Co.')

Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject)


let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

// Write your code below:
async function serveDinnerAgain() {
    const foodArray = await Promise.all(
        [steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]
    )
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}
serveDinnerAgain()

