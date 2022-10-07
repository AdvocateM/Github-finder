// Init Github
const github =new Github;

// Init UI
const ui = new UI;

const searchUser =  document.getElementById('searchUser');

// Search Input event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  console.log(userText)

  if(userText !== ''){
    // Make HTTP Call 
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found'){
          // Show Alert
          // alert("User Is Not Found")
          // let url = data.user.html_url
          // ui.showAlert('User not found', url)

          ui.showAlert('User not found')
        } else
        // Show the Profile
        // console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos)
      })
  }else{
    // Clear the profile
    ui.clearProfile()
  }
});