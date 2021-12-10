class Github {
    constructor( ){
        this.client_id = 'fd989be048ada7791435';
        this.client_secret = '1794f3c7ef7fc82bc21b81fe2f0e1b0df78a24bb';
        this.repos_count = 5;
        this.repos_sort = "created asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
