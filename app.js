const ui = new UI;
const github = new Github;
const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("keyup",e=>{
    let userText=e.target.value;
    if(userText!=""){
        github.getUser(userText)
        .then(data=>{
            if(data.data.message==="Not Found"){
                ui.showAlert();
            }
            else{
            
                ui.showProfile(data.data);
                ui.showRepos(data.repo_limit);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    else{
        ui.clearProfile();
    }
e.preventDefault();
});
