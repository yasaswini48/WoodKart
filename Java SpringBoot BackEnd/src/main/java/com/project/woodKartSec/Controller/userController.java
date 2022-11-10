package com.project.woodKartSec.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.woodKartSec.Model.address;
import com.project.woodKartSec.Model.cart;
import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.user;
import com.project.woodKartSec.Service.userService;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class userController 
{
	@Autowired
	userService userServiceObj;
	
	@GetMapping("/users")
	public List<user> getAllUsers()
	{
		return this.userServiceObj.getAllUsers();
	}
	
	@PostMapping("/users")
	public user addUser(@RequestBody user userObj)
	{
//		System.out.println("Adding user in controller");
		return this.userServiceObj.addUser(userObj);
	}
	
	@GetMapping("/users/{username}")
	public ResponseEntity<user> getUserByUsername(@PathVariable String username)
	{
		return this.userServiceObj.getUserByUsername(username);
	}
	
	@GetMapping("/users/{username}/{password}")
	public ResponseEntity<user> getUserByUsernameAndPassword(@PathVariable String username,@PathVariable String password)
	{
//		System.out.println("U gave=Username="+username+" pass="+password);
		return this.userServiceObj.findUserByUsernameAndPassword(username, password);
	}
	
	@GetMapping("/users/getUserById/{id}")
	public ResponseEntity<user> getUserById(@PathVariable String id)
	{
		return this.userServiceObj.getUserById(id);
	}
	
	@PostMapping("/users/addToCart/{id}")
	public ResponseEntity<user> addToCart(@PathVariable String id,@RequestBody cart myCart)
	{
		return this.userServiceObj.addToCart(id, myCart);
	}
	
	@DeleteMapping("/users/removeFromCart/{userId}/{productId}")
	public ResponseEntity<user> removeFromCart(@PathVariable String userId,@PathVariable String productId)
	{
		return this.userServiceObj.removeProduct(userId, productId);
	}
	
	@PostMapping("/users/addAddress/{id}")
	public ResponseEntity<user> addAddress(@PathVariable String id,@RequestBody address addressObj)
	{
		return this.userServiceObj.addAddress(id, addressObj);
	}
	
	@DeleteMapping("/users/clearCart/{id}")
	public ResponseEntity<user> clearCart(@PathVariable String id)
	{
		System.out.println("Clearing cart!");
		return this.userServiceObj.clearCart(id);
	}
	
	@GetMapping("/users/getOrderById/{id}")
	public ResponseEntity<order>  getOrderById(@PathVariable String id) 
	{
		Optional<order>ans=this.userServiceObj.getOrderById(id);
		if(ans.isEmpty())	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<order>(ans.get(),HttpStatus.OK);
	}
	
	@GetMapping("/users/getAllOrders")
	public List<order> findAllOrders()
	{
		return this.userServiceObj.findAllOrders();
	}
	
	@GetMapping("/users/getAllOrders/{id}")
	public ResponseEntity<List<order>> findAllOrders(@PathVariable String id)
	{
		return this.userServiceObj.findAllOrders(id);
	}
}

















