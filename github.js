class Github {
  constructor() {
    this.client_id = '895c86270f6132d001a0';
    this.client_secret = 'dcbba0ab78bd471d454f15698b3d9d391cd30253';
  }

  async getUser(user) {
    // Get from api
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Get JSON data
    const profile = await profileResponse.json();

    return {
      profile
    };
  }

  async getRepos(user) {
    // Get from api 
    const repoResponse = await fetch(`
      https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}
    `);

    const repo = await repoResponse.json();

    return {
      repo
    };
  }
}