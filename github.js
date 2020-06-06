class Github{
    constructor(){
        this.Client_ID=`126764b069f8221a1eda`;
        this.Client_Secret=`c379abeb69b8513bbaaf25b0feaa4e6bfd898a93`;
    }
    async getUser(username){
        const URL1=`https://api.github.com/users/${username}?client_id=${this.Client_ID}&client_secret=${this.Client_Secret}`;
        const URL2=`https://api.github.com/users/${username}/repos?client_id=${this.Client_ID}&client_secret=${this.Client_Secret}&sort=pushed`;
        const profile=await fetch(URL1);
        const repo=await fetch(URL2);
        const data = await  profile.json();
        const repo_data = await  repo.json();
        var repo_limit=[];
        for(var i=0;i<5;i++){
            repo_limit.push(repo_data[i]);
        }        
        return {
            data,repo_limit
        };
    }
}