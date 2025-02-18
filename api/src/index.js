import 'dotenv/config';
import express from "express";
import cors from 'cors';
import controllerAdm from './controller/controllerAdm.js'
import produtosController from './controller/produtosController.js';

const server = express();



server.use(cors());
server.use(express.json());
server.use(controllerAdm);
server.use(produtosController);


server.use('/storage/capaProduto', express.static('storage/capaProduto'));

server.listen(process.env.PORT,  _ => console.log(`API rodando na porta ${process.env.PORT}`));
