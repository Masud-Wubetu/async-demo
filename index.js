console.log('Before');
getUser(1, (user) => {
    console.log('User', user)
});
console.log('After');

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user data form the database...');
        callback({ id:id, gitHubUsername: 'masud-wubetu'});
    }, 2000);
    
}