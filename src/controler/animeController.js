import {Inserir , Deletar} from '../repository/animeRepository.js'
import {Router} from 'express'

const server =Router();

server.post('/anime' , async (req,resp) =>{
    try {
        const anime = req.body;

        const x= await Inserir(anime);
        resp.send({x});
    } catch (err) {
        resp.status(406).send({
            erro:err.message
        })
    }
}) 

server.delete('/anime' , async (req,resp)=>{
    try {
        const id = req.body.id;

        const x=Deletar(id);
        resp.status(204).send();
    } catch (err) {
        resp.status(406).send({
            erro:err.message
        });
    }
})

export default server;