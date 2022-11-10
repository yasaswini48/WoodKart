import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  userObj:any
  username:String=""
  addressForm:FormGroup=new FormGroup({
    "username":new FormControl('',[Validators.required,Validators.minLength(5)]),
    "mobileNo":new FormControl('',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]),
    "pinCode":new FormControl('',[Validators.required,Validators.minLength(5)]),
    "addressLine":new FormControl('',[Validators.required])
  })
  constructor(private userServiceObj:UserService,private routerObj:Router)
  { }
  ngOnInit(): void
  {
    this.userObj=JSON.parse(localStorage.getItem("user") || '{}');
    this.username= this.userObj["username"]
  }
  //getters
  get getUsername()
  {
    return this.addressForm.get("username");
  }
  get getMobileNo()
  {
    return this.addressForm.get("mobileNo");
  }
  get getPincode()
  {
    return this.addressForm.get("pinCode");
  }
  get getAddressLine()
  {
    return this.addressForm.get("addressLine");
  }
  onAddAddress()
  {
    let newAddressObj=
    {
      "username":this.getUsername?.value,
      "mobileNo":this.getMobileNo?.value,
      "pinCode":this.getPincode?.value,
      "addressLine":this.getAddressLine?.value,
    };
    console.log("Ur address=",newAddressObj);
    this.userServiceObj.addAddress(this.userObj.id,newAddressObj).subscribe(res=>
      {
        this.userObj=res;
        console.log("Address added sucessfully!",this.userObj);
        localStorage.setItem("user",JSON.stringify(this.userObj));
        this.routerObj.navigateByUrl("payment");
      },err=>{
        console.log("Error while adding addres!");
      });
  }

}
