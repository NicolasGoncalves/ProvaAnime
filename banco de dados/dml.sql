--Cadastrar novo Anime
insert into tb_animes(nm_anime) 
		value("?");

--Remover Anime por id       
delete from tb_animes 
	where id_anime = ?;

--Consultar Animes
Select nm_anime from tb_animes;