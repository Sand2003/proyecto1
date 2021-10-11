const express = require('express');
const taller = express.Router();
const db = require('../config/database');
//const TALLER = require('../taller_de_node_js.json').empleados;

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
taller.put('/:id([0-9]{1,3})', async (req, res, next) => {
    const {user_password, user_name, user_lastname, user_number, user_mail, user_address, user_rol} = req.body
    
    if(user_password && user_name && user_lastname && user_number && user_mail && user_address && user_rol) {
        let query = `UPDATE empleados SET user_password='${user_password}',user_name='${user_name}',user_lastname='${user_lastname}',`;
        query += `user_number='${user_number}',user_mail='${user_mail}',user_address='${user_address}', user_rol='${user_rol}' WHERE user_id=${req.params.id}`;
        const rows =await db.query(query);
        if(rows.affectedRows == 1) {
            return res.status(200).json({code: 200, message: "Usuario actualizado correctamente" });
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error" });
    }
    return res.status(500).json({code: 500, message: "Campos incompletos" });

});

//obtener empleados, opcional
taller.get("/",async (req, res, next) =>{
    const T = await db.query("SELECT * FROM `empleados`");
    return res.status(200).json({code: 200, message: T});
});


module.exports = taller;