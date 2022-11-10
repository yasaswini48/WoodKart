package com.project.woodKartSec.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.project.woodKartSec.Model.address;
import com.project.woodKartSec.Model.cart;
import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.user;

@Component
public interface userService 
{
	public List<user> getAllUsers();
	public user addUser(user userObj);
	public ResponseEntity<user> getUserByUsername(String username);
	public ResponseEntity<user> addToCart(String userId,cart cartObj);
	public ResponseEntity<user> findUserByUsernameAndPassword(String username,String password);
	public ResponseEntity<user> getUserById(String id);
	public ResponseEntity<user> removeProduct(String userId,String productId);
	public ResponseEntity<user> addAddress(String userId,address addressObj);
	public ResponseEntity<user> clearCart(String userId);
	public ResponseEntity<List<order>> findAllOrders(String userId);
	public List<order> findAllOrders();
	public Optional<order> getOrderById(String orderId) ;
}
