class UI{
    showProfile(user){
        this.clearAlert();
        document.querySelector("#profile").style.display="block";
        const profile = document.getElementById("profile");
        profile.innerHTML=`
        <div class="card card-body mt-3">
                 <div class="row">
                    <div class="col-md-3 col-sm-12 col-lg-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2 rounded mx-auto d-block">
                        <a href="${user.html_url}" style="text-decoration:none;color:white;"><button class="btn-primary btn btn-block mt-3 ">View Profile</button></a>
                    </div>
                     <div class="col-md-9 col-sm-12 col-lg-9">
                        <div class="badges mt-2">
                            <span class="badge badge-dark p-2">Public Repos ${user.public_repos}</span>
                            <span class="badge badge-secondary p-2">Public gists ${user.public_gists}</span>
                            <span class="badge badge-success p-2">Followers ${user.followers}</span>
                            <span class="badge badge-danger p-2">Following ${user.following}</span>
                        </div>  
                        <ul class="list-group mt-2">
                        <li class="list-group-item list-group-item-primary text-dark">Name : ${user.name}</li>
                        <li class="list-group-item list-group-item-secondary text-dark">Company : ${user.company}</li>
                        <li class="list-group-item list-group-item-primary text-dark">Website : ${user.blog}</li>
                        <li class="list-group-item list-group-item-secondary text-dark">Location : ${user.location}</li>
                      </ul>
                     </div>
                </div>
        </div>
        `;
    }
    showRepos(repos){
        const repo_div=document.querySelector(".repos");        
        let output=`<h1 class="text-center mb-3">Latest Repositories</h1>`;
        repos.forEach(repo => {
            output+=`
            <div class="card card-body mt-2">
                <div class="row">
                    <div class="col-md-5 col-lg-6 col-sm-4">
                    <a href="${repo.html_url}" target="_blank" style="text-decoration:none;color:black;">${repo.name}</a>
                    </div>
                     <div class="col-md-7 col-lg-6 col-sm-8">
                        <span class="badge badge-dark p-1">Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-1">Watchers : ${repo.watchers}</span>
                        <span class="badge badge-success p-1">Forks : ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
            
        });
        repo_div.innerHTML=output;
       
        

    }
    clearProfile(){
        const profile = document.getElementById("profile");
        profile.innerHTML="";
        
    }
      showAlert(){
        this.clearAlert();
        const alert=document.createElement("div");
        alert.innerHTML=`<div class="alert alert-danger" role="alert">User not found</div>`; 
        document.querySelector("body").insertBefore(alert,document.querySelector(".searchContainer"));
        document.querySelector("#profile").style.display="none";
        setTimeout(()=>{
            alert.style.display="none";
        },3000);
    }
     clearAlert(){
        const alert=document.querySelector(".alert")
        if(alert){
            alert.remove();
        }
    }
}