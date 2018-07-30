


    
var data = [
    {     "id":"1","eventImage":"frd",
    "evTitle":"tituloo",
    "evText":"textooo",
    "evHour":"horaaa"
    },

    { "id":"2","eventImage":"frd",
    "evTitle":"tituloo2",
    "evText":"textooo",
    "evHour":"horaaa"},

    { "id":"3","eventImage":"frd",
    "evTitle":"tituloo3",
    "evText":"textooo",
    "evHour":"horaaa"}
];   


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
    
    let evText = document.createElement("p");
    evText.innerHTML=product.evText;
    div1.appendChild(evText);
    evText.classList.add("textEvent");

    let evHour = document.createElement("p");
    evHour.innerHTML=product.evHour;
   div1.appendChild(evHour);
    evHour.classList.add("horaEvent");
//     this.s1.appendchild()
             
                this.d1.appendChild(div1);
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


 