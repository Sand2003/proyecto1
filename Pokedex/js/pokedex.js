//jalar datos del servidor
window.onload = init;
var headers = {};

function init(){
    //autorización
    if(localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadUser();
        window.location.href = "admin.html"; 
    }
    else {
        window.location.href = "index.html";
    }
}


function loadUser(){
    axios.get("https://proyecto1empleados.herokuapp.com/user", headers)
    .then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
}

