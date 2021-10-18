window.onload = init;

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        //document.querySelector('.btn-secondary') => boton de Registro
        window.location.href = "login.html"
    });

    document.querySelector('.btn-primary').addEventListener('click', signin);
    //document.querySelector('.btn-primary') => boton de Entrar
}

function signin(){
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var number = document.getElementById('input-number').value;
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value; 
    var address = document.getElementById('input-address').value;

    axios({
        method: 'post',
        url: 'https://sand2003.github.io/proyecto1/user/signin',
        data: {
            user_name: name,
            user_lastname: lastname,
            user_number: number,
            user_mail: mail, 
            user_password: pass,
            user_address: address
        }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "login.html";
    }).catch(function(err){
        console.log(err);
    })
}