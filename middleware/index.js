module.exports = (req, res, next) =>{
    //GET - OBTENER UN RECURSO
    return res.status(200).json({code: 1, message: "Bienvenido al inicio"});
}