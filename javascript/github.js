class Github {
  constructor() {
    this.clientID = "dce3626eef855d688adf";
    this.clientSecret = "f93b5fae6fa37c1627d1ce3ea5636f3e7613ff31";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&clientSecret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
