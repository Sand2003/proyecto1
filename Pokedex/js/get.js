window.onload = init;
var headers = {};

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
    }
    else{
        window.location.href = "index.html";
    }

    document.querySelector('.btn-primary').addEventListener('click', buscar);
    //document.querySelector('.btn-primary') => boton de buscar
}

function buscar(){
    var name = document.getElementById('input-name').value;
    
    axios({
        method: 'get',
        url: 'https://proyecto1empleados.herokuapp.com/user/' + name
    },headers).then(function(res) {
        console.log(res);
        displayuser(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayuser(empleados){
    var body = document.querySelector("body");
    body.innerHTML += `<h3>ID del usuario: ${empleados[0].user_id}</h3> 
    <h4>Nombre: ${empleados[0].user_name}</h4> 
    <h5>Apellido: ${empleados[0].user_lastname}</h5>
    <h6>Correo electrónico: ${empleados[0].user_mail}</h6>
    <h7>Contraseña: ${empleados[0].user_password}</h7> <p>
    <h8>Dirección: ${empleados[0].user_address}</h8>`;
}