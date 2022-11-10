package com.project.woodKartSec.Repository;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.project.woodKartSec.Model.product;
public interface productRepo extends MongoRepository<product, String>
{
	public Optional<product> getById(String id);
	public Optional<product> getByProductName(String name);
}
