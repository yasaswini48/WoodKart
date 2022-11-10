package com.project.woodKartSec.Repository;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.http.ResponseEntity;

import com.project.woodKartSec.Model.user;

public interface userRepo  extends MongoRepository<user,String>
{
	//find user by username
	public Optional<user> findByUsername(String username);
	//get by id
	
	
	//find user by username and password
	@Query("{username : ?0, password : ?1}")
	Optional<user> findUserByUsernameAndPassword(String username, String password);
}
