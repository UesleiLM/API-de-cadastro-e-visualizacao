package com.criandoapi.projeto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.criandoapi.projeto.repository.IUsuario;
import com.criandoapi.projeto.model.Usuario;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/usuarios")
public class UsuarioController{
	
	@Autowired
	private IUsuario repository;	
	
	@GetMapping()
	public List<Usuario> ListaUsuarios(){
		return (List<Usuario>) repository.findAll();
	}
	
	@PostMapping
	public Usuario CriarUsuario(@RequestBody Usuario usuario) {
		Usuario UsuarioNovo = repository.save(usuario);
		return UsuarioNovo;
	}
	
	@PutMapping
	public Usuario AtualiarUsuario(@RequestBody Usuario usuario) {
		Usuario AttUsuario = repository.save(usuario);
		return AttUsuario;
	}
	
	@DeleteMapping("/{id}")
	public Optional<Usuario> DeletarUsuario(@PathVariable Integer id) {
		Optional<Usuario> DelUsuario = repository.findById(id);
		repository.deleteById(id);
		return DelUsuario;
	}
	
}
