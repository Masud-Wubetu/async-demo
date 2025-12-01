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

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user data from the database...');
            resolve({ id:id, gitHubUsername: 'masud-wubetu'});
        }, 2000);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("calling GitHub API...");
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling GitHub API to get commits...");
            resolve(['commit1', 'commit2']);
        }, 2000);
    });
}