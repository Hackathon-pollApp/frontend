   
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
         div1.setAttribute("id","clicable");
         div1.setAttribute("class","event");	
     	
    	
    let eventImage = document.createElement("img");	
    eventImage.setAttribute("src",product.eventImage);	
    div1.appendChild(eventImage);	
    	
    let evTitle = document.createElement("h2");	
    evTitle.innerHTML=product.evTitle;	
    div1.appendChild(evTitle);	
    evTitle.classList.add("evTitle");
    	
    let evText = document.createElement("p");	
    evText.innerHTML=product.evText;	
    div1.appendChild(evText);	
    evText.classList.add("evText");	

    let evHour = document.createElement("p");	
    evHour.innerHTML=product.evHour;	
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
var data = loadBestSell(data);	
 document.getElementById("clicable").addEventListener("click",function(){	
     window.location.replace("eventSinglePage.html")	
    	
})