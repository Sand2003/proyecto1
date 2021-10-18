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

    document.querySelector('.btn-primary').addEventListener('click', borrar);
    //document.querySelector('.btn-primary') => boton de Entrar
}

function borrar(){
    var id = document.getElementById('input-id').value;
    
    axios({
        method: 'delete',
        url: 'https://sand2003.github.io/proyecto1/Pokedex/user/delete/' + id
    }, headers).then(function(res) {
        console.log(res);
        alert("Usuario eliminado correctamente");
    }).catch(function(err){
        console.log(err);
    })
}
