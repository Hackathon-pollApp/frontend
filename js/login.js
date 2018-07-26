var url='http://localhost:8080';

$('#registerDiv').show();
$('#loginDiv').hide();


$('#buttonLogin').click( function() {
   var success=function(user){
      alert("Benvingut " + user.name +", el teu id es " + user.id);
   };

   var error=function(error){
      alert("Error al registrar-se: " + error.status);
   };

   var json = initLoginJson();
   post(url+"/login",json,success,error);
   
});

function initLoginJson(){
   var email=$('#inputEmail').val();
   var password=$('#inputPassword').val();

   var json={};

   json["email"]=email;
   json["password"]=password;

   return json;
}
$('#registerButton').click( function() {
   var success=function(user){
      alert("Benvingut " + user.name +", el teu id es " + user.id);
   };

   var error=function(error){
      alert("Error al registrar-se: " + error.status);
   };

   var json = initRegisterJson();
   debugger;
   post(url+"/users",json,success,error);
});

function initRegisterJson(){
   var email=$('#inputEmailRegister').val();
   var name=$('#inputNameRegister').val();
   var password=$('#inputPasswordRegister').val();

   var json={};

   json["email"]=email;
   json["name"]=name;
   json["password"]=password;

   return json;
}


$('#goToLogin').click( function() {

   $('#registerDiv').hide()
   $('#loginDiv').show();
});


$('#goToRegisterButton').click( function() {

   $('#registerDiv').show();
   $('#loginDiv').hide()
});


function post(url,json,success, error){
   $.ajax({
     method: "POST",
     url: url,
     data: JSON.stringify(json),
     contentType: "application/json"
   }).done(function(data) {
      success(data);
   }).fail(function(err){
      error(err);
   });
}