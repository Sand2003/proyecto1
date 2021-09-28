//mandará a llamar todos los archivos para que el proyecto funcione
const express = require('express');
const app = express();

app.get("/", (req, res, next) =>{
    res.send("Bienvenido").status(200);
})

//crear el servidor
app.listen(3000, () =>{
console.log("Server is running...")
})