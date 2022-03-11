const connection = require('../config/dbconnect.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require("express");
const router = express.Router();

exports.checkAuth = (req, res, callback) => {
    let token = req.headers.authorization
    if(!token) res.status(406).json({msg:"Não autorizado"})
    let payload = jwt.decode(token)
    try {
        connection.query(
            'SELECT * FROM users WHERE ? = public_key',
            [payload.pk],
            (error,result) => {
                if (error) throw error
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'})
                let user = result[0]
                jwt.verify(token,user.private_key, (error)=>{
                    if(error) res.status(401).json('Token inválido')
                    req.user = user
                    return callback()
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.login = (req,res) => {
    let username = req.body.username
    let password = req.body.password
    try {
        connection.query(
            'SELECT * FROM users WHERE username = ?',
            [username],
            (err,result)=>{
                let user = result[0]
                if(err) throw err
                if(!user || !bcrypt.compareSync(password,user.password)){
                    res.json({
                        msg:'Username ou password incorreta'
                    })
                }
                else {
                    let payload = {
                        pk : user.public_key
                    } 
                    let options = {
                        expiresIn: 15000,
                        issuer: 'VisitaSaoMiguel'
                    }
                    let token = jwt.sign(payload, user.private_key,options)
                    let userInfo = {
                        level: user.level
                    }

                    res.header('Authorization',token).json(userInfo)
                }
                
            }
        )
    }
    catch(err){
        res.json({
            msg:'erro...'
        })
    }
    
}

router.post(`/register`,(req,res)=>{

    connection.query(`SELECT COUNT(users.userID) AS contagem FROM users WHERE users.username = ?`,
    [req.body.username],
    (err,result)=>{
        if(err){
            console.log(err)
        }else
            if(result[0].contagem == 0){
            connection.query("INSERT INTO users (username, password, level) VALUES (?,?,?)",
            [req.body.username,bcryptjs.hashSync(escape(req.body.password,bcryptjs.genSaltSync(2))),"regular"],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(406).send("Erro na introdução");
                }
                else{
                      connection.query(
                        'UPDATE user SET public_key = ?, private_key = ? WHERE iduser = ?',
                        [Math.random().toString(36).substring(2) + result.insertId, Math.random().toString(36).substring(2) + result.insertId, result.insertId],
                        (error,result)=>{
                          if (error) throw error
                    });
                res.status(200).send()
                };
          });
        }
        else{
            res.status(406).send("Já existe uma conta com esse username!")
        }
    })
});