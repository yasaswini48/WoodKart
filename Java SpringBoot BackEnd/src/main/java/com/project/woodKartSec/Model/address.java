package com.project.woodKartSec.Model;

public class address 
{
	private String username;
	private String mobileNo;
	private String pinCode;
	private String addressLine;
	
	public address(String username, String mobileNo, String pinCode, String addressLine) {
		super();
		this.username = username;
		this.mobileNo = mobileNo;
		this.pinCode = pinCode;
		this.addressLine = addressLine;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getAddressLine() {
		return addressLine;
	}
	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}
	
}
