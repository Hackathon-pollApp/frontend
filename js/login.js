//var url='https://poll-webapp.herokuapp.com';
var url = 'http://localhost:8080';

$('#registerDiv').show();
$('#loginDiv').hide();


$('#buttonLogin').click(function () {
    var redirectTo = "eventCreator.html";
    var success = function (user) {
        alert("Benvingut " + user.name + ", el teu id es " + user.id);
    };

    var error = function (error) {
        alert("Error al registrar-se: " + error.status);
    };

    var json = initLoginJson();
    post(url + "/login", json, success, error, redirectTo);

});

function initLoginJson() {
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();

    $("#checkbox1").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
        } else {
            $(this).attr('value', 'false');
        }

    });

    var json = {};

    json["email"] = email;
    json["password"] = password;
    //type, entity or user
    json["type"] = "entity";

    return json;
}

$('#registerButton').click(function () {
    var redirectTo = "eventCreator.html";

    var success = function (entity) {
        alert("Benvingut " + entity.name + ", el teu id es " + entity.id);
    };

    var error = function (error) {
        alert("Error al registrar-se: " + error.status);
    };

    var json = initRegisterJson();
    post(url + "/entities", json, success, error, redirectTo);
});

function initRegisterJson() {
    var email = $('#inputEmailRegister').val();
    var name = $('#inputNameRegister').val();
    var password = $('#inputPasswordRegister').val();

    var json = {};

    json["email"] = email;
    json["name"] = name;
    json["password"] = password;

    return json;
}


$('#goToLogin').click(function () {

    $('#registerDiv').hide();
    $('#loginDiv').show();
});


$('#goToRegisterButton').click(function () {

    $('#registerDiv').show();
    $('#loginDiv').hide();
});


function post(url, json, success, error, redirect) {
    $.ajax({
        method: "POST",
        url: url,
        data: JSON.stringify(json),
        contentType: "application/json"
    }).done(function (data) {
        window.location.href = redirect;
        success(data);
    }).fail(function (err) {
        error(err);
        location.reload();
    });
}
