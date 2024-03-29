class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }

  // Display profile in UI
  showProfile(user) {
    // console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>

        <div class="col-md-9">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>

        <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
        
        <span class="badge badge-primary">Followers: ${user.public_followers}</span>
        
        <span class="badge badge-primary">Following: ${user.following}</span>
        <br><br>

        <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
        <ul>
        </div>

        <div class="col-md-3">
        </div>

        <div class="col-md-3">
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3"Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>


          <div class="col-md6">
             <span class="badge badge-primary">Stars: ${repo.stargazers_cont}</span>

            <span class="badge badge-primary">Public Gists: ${repo.watchers_count}</span>
            
            <span class="badge badge-primary">Followers: ${repo.forms_count}}</span>
          </div>
        </div>
      </div>`;
    }));

    // Output Repos
    document.getElementById('repos').innerHTML = output
  }
  // show Arlet message
  showAlert(message) {
    // this.clearAlert();

    // create div
    // const div = document.createElement('div');
    this.profile.innerHTML = `<div class="alert alert-dismissible alert-warning">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <h4 class="alert-heading">Warning!</h4>
  <p class="mb-0">${message} <!--<a href="" class="alert-link" target='_blank'>Checkout the on github</a>-->.</p>
</div>`
  }

  // // Clear Alert Message
  // clearAlert() {
  //   const currentAlert = document.querySelector('.alert');

  //   if (currentAlert) {
  //     currentAlert.remove();
  //   }
  // }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
