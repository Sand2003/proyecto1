const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');

user.put('/put/:id([0-9]{1,3})',async (req, res, next) => {
    const { user_name, user_lastname, user_number, user_mail, user_password, user_address } = req.body

    if(user_name && user_lastname && user_number && user_mail && user_password && user_address) 
    {
        let query = `UPDATE empleados set user_name = '${user_name}', user_lastname = '${user_lastname}', user_mail = '${user_mail}', user_address = '${user_address}', user_number = ${user_number}, user_password = '${user_password}' WHERE user_id=${req.params.id};`;
        const rows = await db.query(query);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario modificado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
    
    
});

user.delete('/delete/:id([0-9]{1,3})',async (req, res, next) => {
    const query = `DELETE FROM empleados WHERE user_id=${req.params.id}`;
    const rows = await db.query(query);
    if(rows.affectedRows == 1) {
        return res.status(200).json({code: 200, messge: "Usuario borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "El usuario no existe"});
});

user.post('/signin',async (req, res, next) => {
    const { user_name, user_lastname, user_number, user_mail, user_password, user_address } = req.body

    if(user_name && user_lastname && user_number && user_mail && user_password && user_address) 
    {
        let query = "INSERT INTO empleados (user_name, user_lastname, user_number, user_mail, user_password, user_address) ";
        query += `VALUES ('${user_name}', '${user_lastname}', '${user_number}', '${user_mail}', '${user_password}', '${user_address}')`;
        
        const rows = await db.query(query);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario registrado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
    
    
});

//autenticación
user.post('/login',async (req, res, next) =>{
    const { user_mail, user_password } = req.body;
    const query = `SELECT * FROM empleados WHERE user_mail = '${user_mail}' AND user_password = '${user_password}';`
    const rows = await db.query(query);

    if(user_mail && user_password){
        //token
        if(rows.length == 1) {
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, "debugkey");
            return res.status(200).json({code:200, message:token});
        }
        else{
            return res.status(200).json({code:401, message:"Usuario y/o contraseña incorrectos"});
        }
    }
    else{
        return res.status(500).json({code: 500, message: "Campos incompletos"});
    }
    
});

user.get('/', async (req, res, next) => {
    const query = "SELECT * FROM empleados";
    const rows = await db.query(query);

    return res.status(200).json({code: 200, message: rows});
});


user.get('/:name([A-Za-z]+)',async (req, res, next) => {
    const name = req.params.name;
    const T = await db.query(`SELECT * FROM empleados WHERE user_name='${req.params.name}'`);
    if (T.length > 0) {
        
         res.status(200).json({code: 200, message: T}) 
    }
        res.status(404).send({code: 404, message: "Usuario no encontrado"});
});

module.exports = user;