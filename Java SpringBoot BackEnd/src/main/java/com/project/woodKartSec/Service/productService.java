package com.project.woodKartSec.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.context.annotation.Primary;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.product;

@Component
public interface productService 
{
	public List<product> getAllProducts();
	public product addProduct(product obj);
	public void deleteProductById(String id);
	public ResponseEntity<product> getProductById(String id);
	public ResponseEntity<product> updateProductById(String id,product newProductObj);
	public ResponseEntity<product> getProductByProductName(String productName); 
	public  ResponseEntity<product> updateProduct(String productName,product newProductObj);
	public order placeOrder(order orderObj);

}
