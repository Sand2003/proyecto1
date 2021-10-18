window.onload = init;

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        //document.querySelector('.btn-secondary') => boton de eliminar
        window.location.href = "delete.html"
    });
    document.querySelector('.btn-primary').addEventListener('click', function() {
        //document.querySelector('.btn-primary') => boton de modificar
        window.location.href = "modify.html"
    });
    document.querySelector('.btn-three').addEventListener('click', function() {
        //document.querySelector('.btn-third') => boton de obtener
        window.location.href = "get.html"
    });
    document.querySelector('.btn-four').addEventListener('click', function() {
        //document.querySelector('.btn-four') => boton de agregar
        window.location.href = "signin.html"
    }); 
}

