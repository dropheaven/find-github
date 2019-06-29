class Github {
  constructor() {

  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
