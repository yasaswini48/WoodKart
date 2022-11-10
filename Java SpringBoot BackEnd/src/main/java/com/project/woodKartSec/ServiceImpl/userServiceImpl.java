package com.project.woodKartSec.ServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;import org.springframework.boot.ansi.Ansi8BitColor;
import org.springframework.data.mongodb.core.aggregation.VariableOperators.Let;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.project.woodKartSec.Model.address;
import com.project.woodKartSec.Model.cart;
import com.project.woodKartSec.Model.order;
import com.project.woodKartSec.Model.user;
import com.project.woodKartSec.Repository.orderRepo;
import com.project.woodKartSec.Repository.userRepo;
import com.project.woodKartSec.Service.userService;
@Component
public class userServiceImpl implements userService
{
	@Autowired
	userRepo userRepoObj;
	@Autowired
	orderRepo orderRepoObj;
	
	@Override
	public List<user> getAllUsers()
	{
		System.out.println("ALL USERSs="+this.userRepoObj.findAll());
		return this.userRepoObj.findAll();
	}
	
	@Override
	public user addUser(user userObj)
	{
		return this.userRepoObj.save(userObj);
	}
	
	@Override
	public ResponseEntity<user> getUserByUsername(String username)
	{
//		System.out.println("Finding for user="+username);
		Optional<user>ans=userRepoObj.findByUsername(username);
//		if(ans.isPresent())
//			System.out.println("ans="+ans.get());
//		else 
//			System.out.println("Not found user!");
		if(ans.isEmpty())
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<user>(ans.get(),HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<user> findUserByUsernameAndPassword(String username,String password)
	{
//		System.out.println("Finding for user="+username+" pass="+password);
		Optional<user> ans=this.userRepoObj.findUserByUsernameAndPassword(username,password);
		if(ans.isEmpty())
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		System.out.println("Found userPass!!");
		return new ResponseEntity<user>(ans.get(),HttpStatus.OK);
	}
	
	public ResponseEntity<user> getUserById(String id)
	{
		Optional<user>ans=this.userRepoObj.findById(id);
		if(ans.isEmpty())	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<user>(ans.get(),HttpStatus.OK);
	}
	
	//adding product 
	@Override
	public ResponseEntity<user> addToCart(String userId,cart cartObj)
	{
		//1)Get user by Id
		Optional<user>ans=this.userRepoObj.findById(userId);
		if(ans.isEmpty())
		{
			System.out.println("Could not find user of id="+userId);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		user userObj=ans.get();
		List<cart> prevUserCart=userObj.getMyCart();
		userObj.setTotalCount(userObj.getTotalCount()+cartObj.getQuantity());
		System.out.println("Final count="+userObj.getTotalCount());
		for (cart obj : prevUserCart) 
		{
			if(obj.getProductId().equals(cartObj.getProductId()))
			{
				obj.setQuantity(obj.getQuantity()+cartObj.getQuantity());
				System.out.println("Prod already found so inc count!="+obj+" whole="+prevUserCart);
				userObj.setMyCart(prevUserCart);
				this.userRepoObj.save(userObj);
				System.out.println("After updating="+userObj);
				return new ResponseEntity<user>(userObj,HttpStatus.OK);
			}
		}
		System.out.println("Adding for first time!");
		prevUserCart.add(cartObj);
		userObj.setMyCart(prevUserCart);
		this.userRepoObj.save(userObj);
		System.out.println("After updating="+userObj);
		return new ResponseEntity<user>(userObj,HttpStatus.OK);
		
//		user userObj=ans.get();
//		List<cart>prevCart=userObj.getMyCart();
//		//2)First check if product is already present in cart?
////		prevCart.forEach((obj)->{
//////			System.out.println("id="+obj.getProductId()+" qnt:"+obj.getQuantity());
////			if(obj.getProductId().equals(cartObj.getProductId()))
////			{
////				obj.setQuantity(obj.getQuantity()+cartObj.getQuantity());
////				System.out.println("Object is already there,so adding cnt=!"+obj.getQuantity());
////			}
////		});
//		for(int i=0;i<prevCart.size();i++)
//		{
//			cart obj=prevCart.get(i);
//			if(obj.getProductId().equals(cartObj.getProductId()))
//			{
//				obj.setQuantity(obj.getQuantity()+cartObj.getQuantity());
//				prevCart.set(i, obj);
//				System.out.println("Object is already there,so adding cnt=!"+prevCart.get(i).getQuantity());
//				userObj.setMyCart(prevCart);
//				this.userRepoObj.save(userObj);
//				System.out.println("Finally after adding cnttt="+userObj);
//				return new ResponseEntity<user>(userObj,HttpStatus.OK);
//			}
//		}
//			System.out.println("Adding for first time!");
//			//2)Add the cartObj to array
//			if(userObj.getMyCart().add(cartObj))
//				System.out.println("Added sucess!");
//			else 
//			{
//				System.out.println("Cant' add to cart:((");
//				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//		//3)Save
//		this.userRepoObj.save(userObj);
//		System.out.println("Finally after adding="+userObj);
//		return new ResponseEntity<user>(userObj,HttpStatus.OK);
	}

	//removing product
	public ResponseEntity<user> removeProduct(String userId,String productId)
	{
		System.out.println("UserID="+userId+" prdId="+productId);
		//1)get user by id
		Optional<user>ans=this.userRepoObj.findById(userId);
		if(ans.isEmpty())
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else 
		{
			user userObj=ans.get();
			List<cart> prevUserCart=userObj.getMyCart();
			System.out.println("got user="+userObj+" prd to be removed="+productId+" prevCart="+prevUserCart);
			//2)Find the product in the cart
			for (cart cartObj : prevUserCart) 
			{
				if(cartObj.getProductId().equals(productId))
				{
					System.out.println("Match Found for prd,so removing!");
					userObj.setTotalCount(userObj.getTotalCount()-cartObj.getQuantity());	
					prevUserCart.remove(cartObj);
					System.out.println("After removing cart="+prevUserCart);
					break;
				}
			}
			userObj.setMyCart(prevUserCart);
			this.userRepoObj.save(userObj);
			System.out.println("Finally after removal="+userObj);
			return new ResponseEntity<user>(userObj,HttpStatus.OK);
		}
	}

	//add address
	public ResponseEntity<user> addAddress(String userId,address addressObj)
	{
		//get user by id
		Optional<user> ans=this.userRepoObj.findById(userId);
		if(ans.isEmpty())
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		//add address
		user userObj=ans.get();
		userObj.setAddressObj(addressObj);
		this.userRepoObj.save(userObj);
		return new ResponseEntity<user>(userObj,HttpStatus.OK);
	}

	//clear cart
	public ResponseEntity<user> clearCart(String userId)
	{
		//get user by id
		Optional<user> ans=this.userRepoObj.findById(userId);
		if(ans.isEmpty())
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		user userObj=ans.get();
		//clear cart
		List<cart> prevCartObj=userObj.getMyCart();
		prevCartObj.clear();
		userObj.setMyCart(prevCartObj);
		//clear total cnt
		userObj.setTotalCount(0);
		this.userRepoObj.save(userObj);
		System.out.println("after placing order,user="+userObj);
		return new ResponseEntity<user>(userObj,HttpStatus.OK);
	}

	//get orders of user
	public ResponseEntity<List<order>> findAllOrders(String userId)
	{
		//get all orders
		List<order> allOrders=this.orderRepoObj.findAll();
		List<order>ans=new ArrayList<order>();
		for (order orderObj : allOrders) 
		{
			if(orderObj.getUserId().equals(userId))
				ans.add(orderObj);
		}
		if(ans.size()==0)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		System.out.println("Found all orders of len="+ans.size());
		return new ResponseEntity<List<order>>(ans,HttpStatus.OK);
	}
	
	//get all orders
	public List<order> findAllOrders()
	{
		return this.orderRepoObj.findAll();
	}
	
	//get order by id
	public Optional<order> getOrderById(String orderId) 
	{
		return this.orderRepoObj.findById(orderId);
	}
	
}











































