import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from '../notifier.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  regUserObj:any
  username:string=""
  password:string=""
  user:any=null
  regLoginStatus:boolean=false;
  loginForm:FormGroup=new FormGroup({
    "username":new FormControl('',[Validators.required,Validators.minLength(5)]),
    "password":new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  //inject service obj
  constructor(private userServiceObj:UserService,private routerObj:Router,private notifierObj:NotifierService,private activRouterObj:ActivatedRoute) 
  { }
  ngOnInit(): void 
  {
    //check if the value is already in localstorage
    if(localStorage.getItem("user"))
    {
      // this.regUserObj=JSON.parse(localStorage.getItem("user"));
      this.regUserObj=JSON.parse(localStorage.getItem("user")||'{}');
      console.log("type=",typeof(this.regUserObj)," obj=",this.regUserObj)
      this.username=this.regUserObj.username
      this.password=this.regUserObj.password
      console.log("login Got=",this.regUserObj," username=",this.username," pass=",this.password," actual=",this.regUserObj.username)
      this.regLoginStatus=true
    }
  }
  //getters
  get getUsername()
  {
    return this.loginForm.get("username");
  }
  get getPassword()
  {
    return this.loginForm.get("password");
  }
  onLogin()
  {
    //admin
   if(this.username==="admin" && this.password==="admin")
   {
      console.log("ADMIN login!")
      this.notifierObj.showNotification("Welcome Admin!","OK");
      this.user={"username":"admin","password":"admin"};
      localStorage.setItem("user",JSON.stringify(this.user));
      this.routerObj.navigateByUrl("admin/addProduct");
   } 
   else 
   {
   this.userServiceObj.getUserByUsername(this.username).subscribe
   (
     res=>
     {
       console.log("Found username=",res);
       //check username,password match?
       this.userServiceObj.getUserByUsernameAndPassword(this.username,this.password).subscribe(
        res=>
        {
          console.log("Sucess login!");
          this.notifierObj.showNotification("Welcome "+`${this.username}`+"!","OK");
          this.user=res;
          if(localStorage.getItem("prevProduct")!=null)
            this.routerObj.navigateByUrl("/viewFullProduct/"+JSON.parse(localStorage.getItem("prevProduct") || '{}'))
          else
            this.routerObj.navigateByUrl("viewProducts");
          //add to local storage
          localStorage.setItem("user",JSON.stringify(this.user));
          localStorage.setItem("cartCount","0");
          this.loginForm.reset();
        },
        err=>
        {
          this.notifierObj.showNotification("Invalid Password","OK"); 
        }
      )
     },
     err=>
     {
       console.log("Error while getting user=",this.username);
       this.routerObj.navigateByUrl("register");
       this.notifierObj.showNotification("Seems like your new!Register","OK");
   })
  }
  }
  onGotoRegister()
  {
    this.routerObj.navigateByUrl("register");
  }
}
