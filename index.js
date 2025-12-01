console.log('Before');
// getUser(1, handleUser);


// function handleUser(user){
//     getRepositories(user.gitHubUsername, handleRepos);
// }

// function handleRepos(repos){
//     getCommits(repos[0], displayCommits);
// }

// function displayCommits(commits){
//     console.log(commits);
// }

//            //promise based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

         // async and await approach
async  function displayCommits() {
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error', err.message);
    }

}
displayCommits();

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
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repos'));
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