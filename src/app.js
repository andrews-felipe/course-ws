const restify = require("restify");
const mongoose = require("mongoose");
const corsMiddleware = require("restify-cors-middleware");

/**
 * Web Service - CRUD Cursos
 * Tech - Restify, Mongoose, corsMiddleware, MongoDB
 * @author Andrews
 */

// Criando instância do servidor
const server = restify.createServer({
  name: "cursos-web-service",
  version: "1.0.0",
  ignoreTrailingSlash: true,
});

// Definido configuração de CORS
const cors = corsMiddleware({
  preflightMaxAge: 10,
  origins: ["*"],
  allowHeaders: ["X-App-Version"],
  exposeHeaders: [],
});

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser());

// Conectando com o banco de dados
mongoose
  .connect("CONNECTION_STRING", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Iniciando Servidor
    server.listen(3000, () => {
      console.log("Servidor Online na Porta 3000");
    });
  })
  .catch((e) => {
    console.error(e);
  });

exports.server = server;
