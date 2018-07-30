var n;
var element = document.querySelector("#content");
var i;
var j;

function eventDisplayCreator() {

    var event = document.createElement("div");
    event.setAttribute("id","event"+n);
    element.appendChild(event);
    event.classList.add("col-12");
    
    var eventImage = document.createElement("img");
    eventImage.setAttribute("id","evImage");
    event.appendChild(eventImage);
    eventImage.classList.add("ImgEventMenu");
    
    var evTitle = document.createElement("h2");
    evTitle.setAttribute("id","evTitle");
    event.appendChild(evTitle);
    
    var evText = document.createElement("p");
    evText.setAttribute("id","evText");
    event.appendChild(evText);
    evText.classList.add("textEvent");

    var evHour = document.createElement("p");
    evHour.setAttribute("id","evHour");
    event.appendChild(evHour);
    evHour.classList.add("horaEvent");
    
    
    ++n;
// Calling the test function
showData(eventImage,evTitle,evText,evHour);
}


// Function to test the content in event list page 
function showData(eventImage,evTitle,evText,evHour){

 eventImage.setAttribute("src","datajson[i][j]");
 evTitle.innerHTML = datajson[i][j];
 evText.innerHTML = "datajson[i][j]";
 evHour.innerHTML = "datajson[i][j]";
;

 
}


datajson = [
     {
    "eventImage":"frd",
    "eventName":"titulo1",
    "evText":"textooo1",
    "evHour":"horaaa1"
    
    
},
 {
    "eventImage":"frd",
    "evTitle":"titulo2",
    "evText":"textooo2",
    "evHour":"horaaa2"
    
    
},
 {
    "eventImage":"frd3",
    "evTitle":"titulo3",
    "evText":"textooo3",
    "evHour":"horaaa3"
    
    
}
    
    
 
    ];
 
for ( i in datajson) {
  for (j in datajson[i]) {
  
     eventDisplayCreator();
        
    }
  }


console.log("Mostrando resultado final:");
console.log(datajson);

