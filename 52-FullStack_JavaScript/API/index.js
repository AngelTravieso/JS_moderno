const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Crear el servidor
const app = express();

// Habilitar CORS
app.use(cors());

// Conectar a MongoDB
mongoose.promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/veterinaria",{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: true
});

// Habilitar el Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar Routing
app.use("/",routes())

// Puerto y arrancar el servidor
app.listen(4000,() => {
     console.log("Servidor funcionando");
});

