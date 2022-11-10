import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { NotifierService } from './notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit
{
  title = 'WoodKart';
  userType="default"
  totalCount:Number=0
  //get routing obj
  constructor(private routerObj:Router,private notifierObj:NotifierService,public userServiceObj:UserService)
  {}
  ngOnInit(): void
  {
    //get user type
    this.routerObj.events.subscribe((val:any)=>
    {
      if(val.url)       //valid  url 
      {
        if(val.url.includes("admin"))
        {
          // console.log("ADMIN");
          this.userType="admin";
        }
        else if(!val.url.includes("admin") && localStorage.getItem("user"))
        {
          // console.log("USERR");
          this.userType="user";
          this.totalCount=this.userServiceObj.getCartCount();
        }
      }
    })
  }
  onLogOut()
  {
    localStorage.clear();
    this.userType="default";
    console.log("Logged out!");
    this.routerObj.navigateByUrl("home");
  }
}
