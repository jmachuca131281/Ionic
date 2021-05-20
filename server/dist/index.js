"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = new server_1.default();
// Body parser
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
// Middleware => Rutas de mi aplicación.
server.app.use('/user', usuario_1.default);
// Conectar DB
mongoose_1.default.connect('mongodb://localhost:27017/covidCounterApp', { useNewUrlParser: true, useCreateIndex: true }, function (err) {
    if (err)
        throw err;
    console.log('Base de datos Online');
});
// Levantar express
server.start(function () {
    console.log("Servidor corriendo en puerto " + server.port);
});
