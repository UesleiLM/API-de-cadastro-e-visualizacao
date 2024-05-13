package com.criandoapi.projeto.repository;

import org.springframework.data.repository.CrudRepository;

import com.criandoapi.projeto.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
