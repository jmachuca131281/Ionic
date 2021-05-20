import Server from "./classes/server";
import userRouters from "./routes/usuario";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();

// Body parser
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

// Middleware => Rutas de mi aplicación.
server.app.use('/user', userRouters);

// Conectar DB
mongoose.connect('mongodb://localhost:27017/covidCounterApp', 
  {useNewUrlParser: true, useCreateIndex: true},
  (err)=>{
    if(err) throw err;
    console.log('Base de datos Online');    
  });

// Levantar express
server.start(()=>{
  console.log(`Servidor corriendo en puerto ${server.port}`);
});