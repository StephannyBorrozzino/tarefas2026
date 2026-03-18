const db = require("../db/dbConnect");

class Registro{
    static async readAllRegistro(){
        console.log("registro.models.js", "readAllRegistro()");
        const query = "SELECT DATE_FORMAT(data, '%d/%m/%Y') AS data, placa, modelo, horario_entrada, horario_saida FROM registros;";
        return db.executarQuery(query);
    }

}

module.exports = Registro;