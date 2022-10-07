class Github{
  constructor(){
    this.client_id = '4ebac894d542a3e639bc';
    this.client_secret = '72ea3b0629ea2d4546b33eb4d642b1aa173509eb';
    this.repose_count = 5;
    this.repos_sort = 'created: asc';
 }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repose_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /users/{username}', {
//   username: 'USERNAME'
// })

