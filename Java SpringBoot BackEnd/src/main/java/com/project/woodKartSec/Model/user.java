package com.project.woodKartSec.Model;

import java.util.Collections;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="userCollection")
public class user 
{
	@Id
	private String id;
	private String username;
	private String password;
	private List<cart> myCart;
	private int totalCount;
	private address addressObj;
	user()
	{
		this.myCart=Collections.emptyList();
		this.totalCount=0;
	}
	public address getAddressObj() {
		return addressObj;
	}
	public void setAddressObj(address addressObj) {
		this.addressObj = addressObj;
	}
	public user(String id, String username, String password, List<cart> myCart, int totalCount, address addressObj) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.myCart = myCart;
		this.totalCount = totalCount;
		this.addressObj = addressObj;
	}
	
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public user(String id, String username, String password, List<cart> myCart, int totalCount) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.myCart = myCart;
		this.totalCount = totalCount;
	}
	public user(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public user(String id, String username, String password, List<cart> myCart) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.myCart = myCart;
	}
	public List<cart> getMyCart() {
		return myCart;
	}
	public void setMyCart(List<cart> myCart) {
		this.myCart = myCart;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "user [id=" + id + ", username=" + username + ", password=" + password + ", myCart=" + myCart
				+ ", totalCount=" + totalCount + ", addressObj=" + addressObj + "]";
	}
	
	
}
