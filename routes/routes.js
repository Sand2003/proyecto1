const express = require('express');
const taller = express.Router();
const db = require('../config/database');

//publicar empleados 
taller.post("/",async (req, res, next) =>{
const {user_password, user_name, user_lastname, user_number, user_mail, user_address, user_rol} = req.body;

    if(user_password && user_name && user_lastname && user_number && user_mail && user_address && user_rol){
        let query = "INSERT INTO empleados (user_name, user_lastname, user_number, user_mail, user_address, user_rol)";
        query += `VALUES ('${user_password}', '${user_name}', '${user_lastname}', '${user_number}','${user_mail}', '${user_address}', '${user_rol}');`;
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario insertado correctamente"});
        }
        return res.status(500).json({code: 500, message:"Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

//eliminar empleados 
taller.delete('/delete/:id([0-9]{1,3})',async (req, res, next) => {
    const query = `DELETE FROM empleados WHERE user_id=${req.params.id}`;
    const rows = await db.query(query);
    if(rows.affectedRows == 1) {
        return res.status(200).json({code: 200, messge: "Usuario borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "El usuario no existe"});
});

//modificar empleados
taller.put('/put/:id([0-9]{1,3})',async (req, res, next) => {
    const { user_name, user_lastname, user_number, user_mail, user_password, user_address } = req.body

    if(user_name && user_lastname && user_number && user_mail && user_password && user_address) 
    {
        let query = `UPDATE empleados set user_name = '${user_name}', user_lastname = '${user_lastname}', user_mail = '${user_mail}',`
        query += `user_address = '${user_address}', user_number = ${user_number}, user_password = '${user_password}' WHERE user_id=${req.params.id}`;
        const rows = await db.query(query);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario modificado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
    
    
});

//obtener empleados, opcional
taller.get("/",async (req, res, next) =>{
    const T = await db.query("SELECT * FROM `empleados`");
    return res.status(200).json({code: 200, message: T});
});

//obtener empleados por su nombre
taller.get('/:name([A-Za-z]+)',async (req, res, next) => {
    const name = req.params.name;
    const T = await db.query(`SELECT * FROM empleados WHERE user_name='${req.params.name}'`);
    if (T.length > 0) {
        
         res.status(200).json({code: 200, message: T}) 
    }
        res.status(404).send({code: 404, message: "Usuario no encontrado"});
});

module.exports = taller;