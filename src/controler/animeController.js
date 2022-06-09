import {Inserir , Deletar , Consultar} from '../repository/animeRepository.js'
import {Router} from 'express'

const server =Router();

server.get('/anime', async (req, resp) => {
    try {
        const x = await Consultar();
        resp.send(x);

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

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