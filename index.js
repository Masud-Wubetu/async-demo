console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

//callBack
//Promise
//async/await

function getUser(id){
    setTimeout(() => {
        console.log('Reading a user data form the database...');
    }, 2000);
    return { id:id, githubUsername: 'masud-wubetu'}
}