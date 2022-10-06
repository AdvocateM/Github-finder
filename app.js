// Init Github
const github =new Github;

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
          // Show Arlet
          alert("User Is Not Found")
        }
        // Show the Profile
        console.log(data);
      })
  }else{
    // Clear the profile
    
  }
});