let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b == 'number') {
                resolve(a + b);
            } else {
                reject('Arrguments must be numbers!');
            }
        }, 1500);
    });
};

asyncAdd(5, '8').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 30);
}).then((res) => {
    console.log('Should be: ', res);
}).catch((errorMessage) => {
    console.log('ERROR: ', errorMessage);
});
// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked!'); 
//         reject('Unable to fulfill promise!');
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });