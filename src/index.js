import 'dotenv/config'

import animeController from './controler/animeController.js'

import express from 'express'
import cors from 'cors'


const server=express();

server.use(cors());
server.use(express.json());

server.use(animeController);

server.listen(process.env.PORT,
    () => console.log(` A API está online na porta ${process.env.PORT}`));