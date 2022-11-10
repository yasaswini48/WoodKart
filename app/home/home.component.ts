import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {faCoffee} from '@fortawesome/fontawesome-free';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerObj:Router) { }

  ngOnInit(): void {
  }
  onGotoShop()
  {
    this.routerObj.navigateByUrl("viewProducts")
  }

}
