   
var data = [
    {  "id":"1","eventImage":"https://www.messec.dk/fileadmin/_processed_/8/a/csm_event_case_39696183e2.jpg",
    "evTitle":"Lorem Ipsum",
    "evText":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    "evHour":"Div, Oct-5"
    },

    { "id":"2","eventImage":"https://www.messec.dk/fileadmin/_processed_/8/a/csm_event_case_39696183e2.jpg",
    "evTitle":"Lorem Ipsum",
    "evText":" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    "evHour":"Div, Oct-5"},

    { "id":"3","eventImage":"https://www.messec.dk/fileadmin/_processed_/8/a/csm_event_case_39696183e2.jpg",
    "evTitle":"Lorem Ipsum",
    "evText":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    "evHour":"Div, Oct-5"}
];   

// Function to test the content in event list page 

class eventCreator{	
    constructor(data){	
        this.d1 = document.getElementById("content");	
        this.data = data;	
        console.log(data);	
    }	
    showEvents(){	
         for(let product of this.data){	
        let div1 = document.createElement("div");	
        div1.setAttribute("id","clicable0");
        div1.setAttribute("class",product.id); 
         div1.setAttribute("class","event",product.id);
         div1.setAttribute("data-event-id",product.id);	
     	
    	
    let eventImage = document.createElement("img");	
    eventImage.setAttribute("src",product.eventImage);	
    eventImage.setAttribute("class",product.id); 
    eventImage.setAttribute("id",'clicable1'); 
    div1.appendChild(eventImage);	
    	
    let evTitle = document.createElement("h2");	
    evTitle.innerHTML=product.evTitle;	
    evTitle.setAttribute("class",product.id); 
    evTitle.setAttribute("id",'clicable2');
    div1.appendChild(evTitle);	
    evTitle.classList.add("evTitle");
    	
    let evText = document.createElement("p");	
    evText.innerHTML=product.evText;	
    evText.setAttribute("class",product.id); 
    evText.setAttribute("id",'clicable3');
    div1.appendChild(evText);	
    evText.classList.add("evText");	

    let evHour = document.createElement("p");	
    evHour.innerHTML=product.evHour;
    evHour.setAttribute("class",product.id); 	
    div1.appendChild(evHour);	
    evHour.classList.add("horaEvent");	 	
    this.d1.appendChild(div1);	
    evHour.classList.add("evHour");
        }	
    }	
};	
function loadBestSell(data){	
    let myItem = new eventCreator(data);	
    myItem.showEvents();	
}	
var data2 = loadBestSell(data);	

 document.getElementById("clicable0").addEventListener("click",function(evt)
 {	
    $("clicable0").each(function(){
        debugger;
        var DOMelement = this;
        var jQueryElement = $(this);
        
    });

    $("clicable").parent()
     console.log(evt.target);
//     console.log(evt.target.classList);
    //  window.location.replace("eventSinglePage.html")	

})
// SinglePage
function searchEvent(id){
    var eventFound = null; 
    data.forEach(function(event){
       if(id == event.id ){
           eventFound = event;
       }
    })
   return eventFound;
}

