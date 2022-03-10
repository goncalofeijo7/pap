const connection = require('../config/dbconnect.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
                        issuer: 'ENTA'
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