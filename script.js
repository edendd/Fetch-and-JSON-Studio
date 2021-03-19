// TODO: add code here

window.addEventListener("load", function(){
  let json= [];
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
response.json().then( function(json) {

       const astro = document.getElementById("container");
      astrocounter = 0;
       let asto2 = ''
     for (const astronunt of json){
        


        astrocounter++
        asto2 +=`

        <div class="astronaut">
        <div class="bio">
        <h3> ${astrocounter}. ${astronunt.firstName} ${astronunt.lastName}</h3>
        <ul>
         <li>Hours in space: ${astronunt.hoursInSpace}</li>
         <li>Active: ${astronunt.active}</li>
         <li>Skills: ${astronunt.skills}</li>
     </ul>
   
      </div>
      <img class="avatar" src=${astronunt.picture}>
      </div>
        
        `;
     
     }

     astro.innerHTML=asto2;

    })

  })

})