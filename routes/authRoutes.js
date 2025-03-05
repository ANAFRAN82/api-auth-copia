const router = require("express").Router()
const { Router } = require("express");
const {loginController } = require("../Controller/authController")

router.post("/login", loginController);

module.exports = router;