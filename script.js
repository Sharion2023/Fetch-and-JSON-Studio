// TODO: add code here
window.addEventListener("load",function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            json = json.sort(function(b, a) {
                return a.hoursInSpace - b.hoursInSpace });
                console.log(json[0].active)
            for(i=0;i < json.length; i++){
                let activeClass = json[i].active ? 'active' : '';
            container.innerHTML += 
            `
            <div class= "astronaut">
                <div class = "bio">
                    <h3> ${json[i].firstName + " "+ json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class = "${activeClass}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class= "avatar" src = ${json[i].picture}></img>
            </div>`  
            
            }
           
            });
            

        });
        
    
        });


        
    

