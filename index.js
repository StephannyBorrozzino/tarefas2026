const http = require("http");
const morgan = require("morgan");
const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();

const registroRoutes = require("./routes/rotas.routes");
const { title } = require("process");

app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

const porta = Number(process.env.PORTA);

app.use("/", registroRoutes);

app.use((req, res) => {
    res.status(404).render("erro404", { title: "erro 404" });
});

app.listen(porta, () => {
    console.log("servidor está no ar, gg")
    console.log("endereco: http://localhost:" + porta);
});
