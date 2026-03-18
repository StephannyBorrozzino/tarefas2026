// Este arquivo é por todas as conexões com o banco de dados.
require("dotenv").config();
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    connectionLimit: 5,
});

async function executarQuery (query, params =[] ){
    console.log(
        " =======executando================================================================"
    );

    console.log("dbConnect.js", "executarQuery");
    console.log(arguments);

    let con ;
    try{
        con = await pool.getConnection();
        const rows = await con.query(query, params);
        console.log(
            "======================================================"
        );
        return rows;
    
    } catch(err){
        console.error("Erro ao executar a Query, porfavor tente novamente", err);
    }finally{
        if(con) con.release();
    }
}

module.exports = {executarQuery};