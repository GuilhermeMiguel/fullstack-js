const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //importa todos os arquivos de uma pasta

const app = express();
app.use(express.json());
//Aqui eu posso passar quais os dominios eu quero que possam acessar a api, passando vazio assim, ela pode ser acessada publicamente
app.use(cors())

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true,
     useUnifiedTopology: true }    
);

requireDir('./src/models');

//Primeira rota
//use recebe qualquer tipo de requisição, get, delete, put
app.use('/api', require('./src/routes'));


app.listen(3001); 