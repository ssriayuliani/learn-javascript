let myNumber = 5;

function changeNumber () {
    return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    })
}

function startChange() {
    changeNumber();
    console.log(myNumber);
}

// use Async Await
// async function startChange() {
//     await changeNumber();
//     console.log(myNumber);
// }

startChange();