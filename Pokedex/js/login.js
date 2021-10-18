window.onload = init;
//disponible para todos

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        //document.querySelector('.btn-secondary') => boton de Registro
        window.location.href = "signin.html"
    });

    document.querySelector('.btn-primary').addEventListener('click', login);
    //document.querySelector('.btn-primary') => boton de Entrar
}

function login(){
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value; 

    axios({
        method: 'post',
        url: 'http://localhost:9000/user/login',
        data: {
            user_mail: mail, 
            user_password: pass
        }
    }).then(function(res) {
        if(res.data.code === 200){
            localStorage.setItem("token", res.data.message);
            window.location.href = "pokedex.html";
        }
        else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err){
        console.log(err);
    })
}