package com.project.woodKartSec.ServiceImpl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.product;
import com.project.woodKartSec.Repository.orderRepo;
import com.project.woodKartSec.Repository.productRepo;
import com.project.woodKartSec.Repository.userRepo;
import com.project.woodKartSec.Service.productService;

@Component
public class productServiceImpl implements productService
{
	@Autowired
	productRepo productRepoObj;
	@Autowired
	orderRepo orderRepoObj;
	
	@Override
	public List<product> getAllProducts() 
	{
		//System.out.println("getting all products in serviceImpl!!="+this.productRepoObj.findAll());
		return  this.productRepoObj.findAll();
	} 
	
	@Override
	public product addProduct(product productObj)
	{
		//System.out.println("Adding Product="+productObj);
		return this.productRepoObj.save(productObj);
	}
	
	@Override
	public void deleteProductById(String id)
	{
		System.out.println("Deleting obj of id="+id);
		this.productRepoObj.deleteById(id);
	}
	
	@Override
	public ResponseEntity<product> getProductById(String id)
	{
		System.out.println("Geting for="+id);
		Optional<product>ans=productRepoObj.getById(id);
		if(ans.isEmpty())	
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<product>(ans.get(),HttpStatus.OK);
	}
	
	public ResponseEntity<product> updateProductById(String id,product newProductObj)
	{
		Optional<product>oldProduct=this.productRepoObj.getById(id);
		if(oldProduct.isEmpty())	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		product oldProductObj=oldProduct.get();
		oldProductObj.setProductName(newProductObj.getProductName());
		oldProductObj.setProductDesc(newProductObj.getProductDesc());
		oldProductObj.setProductImage(newProductObj.getProductImage());
		oldProductObj.setProductPrice(newProductObj.getProductPrice());
		product finalAnsProduct=this.productRepoObj.save(oldProductObj);
		return new ResponseEntity<product>(finalAnsProduct,HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<product> getProductByProductName(String productName)
	{
		System.out.println("Searching for="+productName);
		Optional<product> ans=productRepoObj.getByProductName(productName);
		if(ans.isPresent())
			return new ResponseEntity<>(ans.get(),HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@Override
	public  ResponseEntity<product> updateProduct(String productName,product newProductObj)
	{
		Optional<product>oldProduct=this.productRepoObj.getByProductName(productName);
		if(oldProduct.isEmpty())	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		product oldProductObj=oldProduct.get();
		oldProductObj.setProductName(newProductObj.getProductName());
		oldProductObj.setProductDesc(newProductObj.getProductDesc());
		oldProductObj.setProductImage(newProductObj.getProductImage());
		oldProductObj.setProductPrice(newProductObj.getProductPrice());
		product finalAnsProduct=this.productRepoObj.save(oldProductObj);
		System.out.println("Updted for-"+productName+" sucessss!!!!");
		return new ResponseEntity<>(finalAnsProduct,HttpStatus.OK);
	}
	
	public order placeOrder(order orderObj)
	{
		System.out.println("Adding order="+orderObj);
		return this.orderRepoObj.save(orderObj);
	}
	
}
