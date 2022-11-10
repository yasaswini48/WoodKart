package com.project.woodKartSec.Model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orderCollection")
public class order 
{
	@Id
	private String id;
	private String userId;
	private List<cart> myCart;
	private int totalCount;
	private int totalAmount;	//with gst
	private String placedOn;
	private String paymentMode;
	public order() {}
	public order(String id, String userId, List<cart> myCart, int totalCount, int totalAmount, String placedOn) {
		super();
		this.id = id;
		this.userId = userId;
		this.myCart = myCart;
		this.totalCount = totalCount;
		this.totalAmount = totalAmount;
		this.placedOn = placedOn;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public List<cart> getMyCart() {
		return myCart;
	}
	public void setMyCart(List<cart> myCart) {
		this.myCart = myCart;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}
	public String getPlacedOn() {
		return placedOn;
	}
	public void setPlacedOn(String placedOn) {
		this.placedOn = placedOn;
	}
	
	public order(String id, String userId, List<cart> myCart, int totalCount, int totalAmount, String placedOn,
			String paymentMode) {
		super();
		this.id = id;
		this.userId = userId;
		this.myCart = myCart;
		this.totalCount = totalCount;
		this.totalAmount = totalAmount;
		this.placedOn = placedOn;
		this.paymentMode = paymentMode;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	@Override
	public String toString() {
		return "order [id=" + id + ", userId=" + userId + ", myCart=" + myCart + ", totalCount=" + totalCount
				+ ", totalAmount=" + totalAmount + ", placedOn=" + placedOn + ", paymentMode=" + paymentMode + "]";
	}
	
}
