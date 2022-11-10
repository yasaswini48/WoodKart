package com.project.woodKartSec.Controller;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.product;
import com.project.woodKartSec.Model.user;
import com.project.woodKartSec.Service.productService;
import com.project.woodKartSec.Service.userService;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class productController 
{
	@Autowired
	productService productServiceObj;
	
	@GetMapping("/products")
	public List<product> getAllProducts()
	{
		System.out.println("Sending Getting all prods in controller!"+this.productServiceObj.getAllProducts().get(0));
		return this.productServiceObj.getAllProducts();
	}
	
	@PostMapping("/products")
	public product addProduct(@RequestBody product productObj)
	{
		//System.out.println("This is the posting!");
		return this.productServiceObj.addProduct(productObj);
	}
	
	@DeleteMapping("/products/{id}")
	public void deleteProduct(@PathVariable String id)
	{
		System.out.println("Deleting obj of id="+id);
		this.productServiceObj.deleteProductById(id);
	}
	
	@GetMapping("/getProductById/{id}")
	public ResponseEntity<product> getProductById(@PathVariable String id )
	{
		//System.out.println("Searching for id="+id);
		return productServiceObj.getProductById(id);
	}
	
	@PutMapping("/updateProductById/{id}")
	public ResponseEntity<product> updateProductById(@PathVariable String id,@RequestBody product updatedProductObj)
	{
		System.out.println("Updating prod of id="+id+" obj="+updatedProductObj);
		return this.productServiceObj.updateProductById(id,updatedProductObj);
	}
	
	@GetMapping("/products/{productName}")
	public ResponseEntity<product> getByproductName(@PathVariable String productName)
	{
		//System.out.println("Searching for="+productName);
		return productServiceObj.getProductByProductName(productName);
	}
	
	@PutMapping("/products/{productName}")
	public ResponseEntity<product> updateProductByName(@PathVariable String productName,@RequestBody product updatedProductObj)
	{
		return productServiceObj.updateProduct(productName, updatedProductObj);
	}
	
	@PostMapping("/products/placeOrder")
	public order placeOrder(@RequestBody order orderObj)
	{
		System.out.println("placing Order!");
		return this.productServiceObj.placeOrder(orderObj);
	}
	
	
}





































