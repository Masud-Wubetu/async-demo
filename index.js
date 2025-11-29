console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {

        });
    });
});
console.log('After');

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user data from the database...');
        callback({ id:id, gitHubUsername: 'masud-wubetu'});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log("calling GitHub API");
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}