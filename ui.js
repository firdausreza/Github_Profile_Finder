class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repo');
  }

  showProfile(user) {
    if (user.blog === '') {
      return 'null';
    } else {
      this.profile.innerHTML = `
      <div class="card">
        <div class="row p-3">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" alt="Profile Picture">
            <a href="https://github.com/${user.login}" target="_blank" class="custom-btn btn btn-block btn-primary mb-3">View Profile</a> 
          </div>
          <div class="col-md-9">
            <div class="mb-3">
              <span class="badge badge-primary text-white">Public repos: ${user.public_repos}</span>
              <span class="badge badge-secondary text-white">Public gists: ${user.public_gists}</span>
              <span class="badge badge-success text-white">Followers: ${user.followers}</span>
              <span class="badge badge-info text-white">Following: ${user.following}</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">URL: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      `
    }
  }

  resetProfile() {
    this.profile.innerHTML = '';
  }

  showRepo(repo) {
    repo.forEach(data => {
      this.repos.innerHTML +=  `
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <a href="https://github.com/firdausreza/${data.name}" target="_blank">${data.name}</a>
              </div>
              <div class="col-6">
                <span class="badge badge-primary">Stars: ${data.stargazers_count}</span>
                <span class="badge badge-success">Watchers: ${data.watchers}</span>
                <span class="badge badge-warning">Forks: ${data.forks}</span>
              </div>
            </div>
          </div>
        </div>
      `
    });
  }

  noRepoUI() {
    this.repos.innerHTML = `
      <div class="card mb-3">
        <div class="card-body">
          <h3>Found nothing.</h3>
        </div>
      </div>
    `
  }
}