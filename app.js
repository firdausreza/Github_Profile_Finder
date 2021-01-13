// Elements and Variables
const unameInput = document.getElementById('username');
const errorAlert = document.getElementById('errorAlert');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const github = new Github(); // Instantiate from Github Class
const ui = new UI(); // Instatiate from UI class

// Event Listeners
searchBtn.addEventListener('click', (e) => {
  // Get username input value
  const unameValue = unameInput.value;

  // Check username value
  if (unameValue !== ''){
    github.getUser(unameValue)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          errorAlert.style.display = 'block';
          setTimeout(showErrorAlert, 2000);
        } else {
          // Show User
          ui.showProfile(data.profile);
        }
      });
    
    github.getRepos(unameValue)
      .then(data => {
        if (data.repo === null) {
          ui.noRepoUI();
        } else {
          ui.showRepo(data.repo);
        }
      });
  } else {
    
  }

  e.preventDefault();
});

clearBtn.addEventListener('click', (e) => {
  unameInput.value = '';
  ui.resetProfile();
})

function showErrorAlert() {
  errorAlert.style.display = 'none';
}