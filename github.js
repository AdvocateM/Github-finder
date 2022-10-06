class Github{
  constructor(){
    this.client_id = '4ebac894d542a3e639bc';
    this.client_secret = '72ea3b0629ea2d4546b33eb4d642b1aa173509eb';

 }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
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

