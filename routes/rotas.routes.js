const express = require("express");
const registroController = require("../controllers/registro.controller");
const router = express.Router();

router.get("/", registroController.mostrarRegistro);

router.get("/cadastroEntrada", registroController.criarRegistro);

module.exports = router;
