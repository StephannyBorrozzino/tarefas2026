const RegistroModel = require("../models/registro.models");

const criarRegistro = (req, res) => {
    //rota cadastroEntrada
    RegistroModel.readAllRegistro().then((registros) => {
        res.render("cadastroEntrada", { title: "Cadastro Entrada", dados: registros });
    });
};

const mostrarRegistro = (req, res) => {
    //rota raiz
    RegistroModel.readAllRegistro().then((registros) => {
        res.render("index", { title: "Registro do Estacionamento", dados: registros });
    });
};

const alterarRegistro = (req, res) => {
    res.end("alterarRegistro vou implementar ainda =)");
};

const deletarRegistro = (req, res) => {
    res.end("deletarRegistro vou implementar ainda =)");
};

module.exports = {
    criarRegistro,
    mostrarRegistro,
    alterarRegistro,
    deletarRegistro,
};