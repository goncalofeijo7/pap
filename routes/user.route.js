const express = require("express");
const router = express.Router();
const connection = require("../config/dbconnect");
const bcryptjs = require("bcryptjs");
const authController = require("../controller/auth.controller");
const path = require("path");

router.post("/", authController.login,(req,res)=>{
  res.redirect('/')
})

router.get("/login", authController.checkAuth, (req, res) => {
  console.log('aqui')
  res.sendFile(path.join(__dirname, "../public/Conta/login.html"));
});


module.exports = router;