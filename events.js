
//var url='https://poll-webapp.herokuapp.com';
var url='http://localhost:8080';





var url2='<script src="https://gist.github.com/paucuevasc/0689eebbea69a56d6e55b595e4e30115.js"></script>'
// History back botton
function goBack() {
    window.history.back();
}

var n=1;
var m=1;
var b=1;
var element = document.querySelector("#content");

var addOptionsButton = document.querySelector("#addOption");
var addOptions = document.querySelector("#options");
 var optionArray=[];

var addVoterButton = document.querySelector("#addVoter");
var addVoters = document.querySelector("#voters");
var dataLauncher = document.querySelector("#sendData");

var name = document.querySelector("#name").value;
var description = document.querySelector("#description").value;
var question = document.querySelector("#question").value;
var imageURL = document.querySelector("#imageURL").value;
var voterArray=[];




//Function to create different options in order to vote.
function optionCreator(){
    
var newOption = document.createElement("input");
var c=m+1;
newOption.setAttribute("id","option"+c);
newOption.setAttribute("type","text"); 
newOption.setAttribute("value","Opció "+""+c);
newOption.setAttribute("name","option"+""+c);      
addOptions.appendChild(newOption);
newOption.classList.add("optioncustom","text-center");
    ++m;
    
}

//function that create new voter inputs. 
function voterCreator(){
    var d=b+1;
    b++;
    var newVoter=document.createElement("form");
    newVoter.setAttribute("id","voter"+d);
    addVoters.appendChild(newVoter);

    var nameVoterInput=document.createElement("input");
    nameVoterInput.setAttribute("class","voterName");
    nameVoterInput.setAttribute("id","voterName"+d);
    newVoter.appendChild(nameVoterInput);
    nameVoterInput.classList.add("optioncustom","text-center");
 
    var emailVoterInput=document.createElement("input");
    emailVoterInput.setAttribute("class","voterMail");
    emailVoterInput.setAttribute("id","voterMail"+d);
    newVoter.appendChild(emailVoterInput);
    emailVoterInput.classList.add("optioncustom","text-center");

    var nVotesInput=document.createElement("input");
    nVotesInput.setAttribute("class","votesNum");
    nVotesInput.setAttribute("id","votesNum"+d);
    newVoter.appendChild(nVotesInput);
    nVotesInput.classList.add("optioncustom","text-center");

}


function initEventJson(){
  // var email=$('#inputEmail').val();
   //var password=$('#inputPassword').val();

   var json={};

    json["name"]=name;
    json["description"]=description;
    json["image"]=imageURL;
    json["question"]=question;
    json["options"]=optionArray;
    json["voters"]=voterArray;
   //type, entity or user
   json["type"]="entity";

   return json;
}

function dataEventJson(){
  // var email=$('#inputEmail').val();
   //var password=$('#inputPassword').val();

   var json={};

    json["eventName"];
    json["eventDescription"];
    json["eventImage"];
    json["eventQuestion"];
    json["eventOptions"];
    json["eventVoters"];
   //type, entity or user
   json["type"]="entity";

   return json;
}

 var success=function(entity){
      alert("Event creat " );
   };
 var error=function(error){
      alert("Error al crear l'event: " + error.status);
   };


function dataSender(){
   
   

    console.log(name+description+question);
    
    optionCounter();
    voterCounter();
     var json = initEventJson();
     post(url+"/events",json,success,error);
    console.log(json);
}

function optionCounter(){
   var i=1;
    while (i<m+1){
        var newOption = document.querySelector("#option"+i).value;
        optionArray[i-1]=newOption;
        ++i;
        console.log(optionArray);
    }  
}
function voterCounter(){
     var i=1;
    while (i<b+1){
         var voter=[];
        voter[0] = document.querySelector("#voterName"+i).value;
        voter[1] = document.querySelector("#voterMail"+i).value;
        voter[2] = document.querySelector("#votesNum"+i).value;
       
      
        voterArray.push(voter);
        i++;
        console.log(voterArray);
    }
    
}


document.addEventListener("keypress",eventDisplayCreator,false);
addOptionsButton.addEventListener("click",optionCreator,false);
addVoterButton.addEventListener("click",voterCreator,false);
dataLauncher.addEventListener("click",dataSender,false);

function post(url,json,success, error){
   $.ajax({
     method: "POST",
     url: url,
     data: JSON.stringify(json),
     contentType: "application/json"
   }).done(function(data) {
       console.log(json);
      success(data);
   }).fail(function(err){
      error(err);
   });
}