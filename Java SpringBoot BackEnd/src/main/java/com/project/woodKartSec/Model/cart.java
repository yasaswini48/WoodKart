package com.project.woodKartSec.Model;

import org.springframework.stereotype.Component;

@Component
public class cart 
{
	private String productId;
	private int quantity;
	public cart() 
	{
		this.quantity=0;
	}
	public cart(String productId, int quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "cart [productId=" + productId + ", quantity=" + quantity + "]";
	}
	
}
