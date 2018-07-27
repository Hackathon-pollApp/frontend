var n=1;
var m=2;
var b=2;
var element=document.querySelector("#content");

var addOptionsButton = document.querySelector("#addOption");
var addOptions = document.querySelector("#options");

var addVoterButton = document.querySelector("#addVoter");
var addVoters = document.querySelector("#voters");



function eventDisplayCreator() {
    
var event=document.createElement("div");
event.setAttribute("id","event"+n);
element.appendChild(event);

var eventImage=document.createElement("img");
eventImage.setAttribute("id","evImage");
event.appendChild(eventImage);

var evText=document.createElement("p");
evText.setAttribute("id","evText");
event.appendChild(evText);

var evTitle=document.createElement("h2");
evTitle.setAttribute("id","evTitle");
evText.appendChild(evTitle);

var evHour=document.createElement("h3");
evHour.setAttribute("id","evHour");
evText.appendChild(evHour);

var evSmallExplain=document.createElement("h3");
evSmallExplain.setAttribute("id","evSmallExplain");
evText.appendChild(evSmallExplain);

++n;
}

function optionCreator(){
    
var newOption=document.createElement("input");
newOption.setAttribute("id","option"+m);
newOption.setAttribute("type","text"); 
newOption.setAttribute("value","OPCIO"+m);
newOption.setAttribute("name","option"+m);      
addOptions.appendChild(newOption);
    ++m;
    
}

function voterCreator(){
    var newVoter=document.createElement("form");
    newVoter.setAttribute("id","voter"+b);
    addVoters.appendChild(newVoter);
    var nameVoterInput=document.createElement("input");
    nameVoterInput.setAttribute("class","voterName");
    nameVoterInput.setAttribute("id","voterName"+b);
    newVoter.appendChild(nameVoterInput);
    var emailVoterInput=document.createElement("input");
    emailVoterInput.setAttribute("class","voterMail");
    emailVoterInput.setAttribute("id","voterMail"+b);
    newVoter.appendChild(emailVoterInput);
    var nVotesInput=document.createElement("input");
    nVotesInput.setAttribute("class","votesNum");
    nVotesInput.setAttribute("id","votesNum"+b);
    newVoter.appendChild(nVotesInput);
    
}


document.addEventListener("keypress",eventDisplayCreator,false);
addOptionsButton.addEventListener("click",optionCreator,false);
addVoterButton.addEventListener("click",voterCreator,false);













function handleFileSelect(evt) {
    var files = evt.target.files; 
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);