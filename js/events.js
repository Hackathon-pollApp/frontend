var n=1;
var element=document.querySelector("#content");

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


document.addEventListener("keypress",eventDisplayCreator,false);