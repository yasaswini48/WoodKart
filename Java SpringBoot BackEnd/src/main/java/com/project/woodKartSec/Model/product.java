package com.project.woodKartSec.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Map the product class to the collection in MongoDB
@Document(collection="productCollection") 
public class product 
{
	@Id
	private String id;
	private String productName;
	private String productDesc;
	private String productImage;
	private int productPrice;
	public product()
	{}
	public product(String productName, String productDesc, String productImage, int productPrice) {
		super();
		this.productName = productName;
		this.productDesc = productDesc;
		this.productImage = productImage;
		this.productPrice = productPrice;
	}
	public String getId() {
		return id;
	}
	public void setId(String id)
	{
		this.id=id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	@Override
	public String toString() {
		return "product [id=" + id + ", productName=" + productName + ", productDesc=" + productDesc + ", productImage="
				+ productImage + ", productPrice=" + productPrice + "]";
	}
	
	
	
}
