class Github {
  constructor() {

  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${clientID}&client_secret=${clientSecret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
