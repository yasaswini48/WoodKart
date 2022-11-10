package com.project.woodKartSec.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.woodKartSec.Model.order;

public interface orderRepo extends MongoRepository<order,String>
{
	
}
