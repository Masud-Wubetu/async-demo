console.log('Before');
getUser(1, handleUser);


function handleUser(user){
    getRepositories(user.gitHubUsername, handleRepos);
}

function handleRepos(repos){
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}
console.log('After');

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user data from the database...');
        callback({ id:id, gitHubUsername: 'masud-wubetu'});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log("calling GitHub API...");
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}

function getCommits(repo, callback){
    setTimeout(() => {
        console.log("Calling GitHub API to get commits...");
        callback(['commit1', 'commit2']);
    }, 2000);
}