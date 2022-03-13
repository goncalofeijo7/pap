
const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

const bcryptjs = require("bcryptjs");

const connection = require("../config/dbconnect");

router.post(`/register`,(req,res)=>{

    connection.query(`SELECT COUNT(users.userID) AS contagem FROM users WHERE users.username = ?`,
    [req.body.username],
    (err,result)=>{
        if(err){
            console.log(err)
        }else
            if(result[0].contagem == 0){
            connection.query("INSERT INTO users (username, email, password, level) VALUES (?,?,?,?)",
            [req.body.username,bcryptjs.hashSync(escape(req.body.password,bcryptjs.genSaltSync(2))),"regular"],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(406).send("Erro na introdução");
                }
                else{
                      connection.query(
                        'UPDATE users SET public_key = ?, private_key = ? WHERE userID = ?',
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

router.post("/getAuth", authController.checkAuth)

module.exports = router;