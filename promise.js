const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000)
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000)
});

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message))


// const p = new Promise((resolve, reject) => {
//     //Kick off some async work
//     setTimeout(() => {
//         resolve(1); //pending => resolved, fulfilled
//         reject(new Error('message')); //pending => rejected
//     }, 2000);
// });

// p
//     .then(result => console.log('Result', result))
//     .catch(err => console.log('Error', err.message))

// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result))

// const Pr = Promise.reject(new Error('reason for rejected'));
// Pr.catch(error => console.log(error));