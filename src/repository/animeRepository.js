import { con } from "./connection.js";

export async function Inserir(anime){
    const comando =
    `Insert into tb_animes (nm_anime) 
    value(?)`
    const [resp]=await con.query(comando,[anime.nome]);
    anime.id= resp.insertid;
    return anime;
}

export async function Deletar(id){
    const comando =
    `delete from tb_animes
    where id_anime = ?`
    const [resp]=await con.query(comando,[id]);
    return resp.affectedRows;
}

export async function Consultar(){
    const comando=
    `Select 
    nm_anime  nome, 
    id_anime  id
    from tb_animes; `
    const [resp]=await con.query(comando);
    return resp;
}