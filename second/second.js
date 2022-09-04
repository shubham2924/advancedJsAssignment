// import { XMLHttpRequest } from "xmlhttprequest";
// import fetch from "node-fetch";
async function func(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/repositories?q=node",true);
    request.send();
    request.onload = () => {
      //console.log(request);
      if (request.status === 200) {
       
        // by default the response comes in the string format, we need to parse the data into JSON
        let data = JSON.parse(request.response)
        let name = data.items[6].name
        let full_name = data.items[6].full_name
        let repo_visibility = data.items[6].private
        let license = data.items[6].license.name
        let score = data.items[6].score

        

        // console.log(data.items[6]);
         let opdata={
          name: name,
          full_name: full_name,
          private: repo_visibility,
          licenseName: license,
          score: score
        }
        document.getElementById("name").innerHTML="Name is: "+ opdata.name
        document.getElementById("fullname").innerHTML="Full name is:"+opdata.full_name
        document.getElementById("licensename").innerHTML="License name is: "+ opdata.licenseName
        document.getElementById("private").innerHTML="Repo visibility status: "+ opdata.private
        document.getElementById("score").innerHTML="Score is: "+ opdata.score
        console.log(opdata)
      } else {
        console.log(`error ${request.status} ${request.statusText}`);
      }
    };
    fetch('https://api.github.com/users/sindresorhus')
        .then(data=>{
            return data.json();
        })
        .then(profileData=>{
            let ff=profileData.followers
            let fff=profileData.following
            let userfollowdata={
                followers:ff,
                following:fff
            }
             document.getElementById("followers").innerHTML="followers count is: "+userfollowdata.followers
            document.getElementById("following").innerHTML="following count is: "+ userfollowdata.following
            console.log(userfollowdata)

            // let fer = profileData.followers
            // let fow = profileData.following
        })
        
}
func();