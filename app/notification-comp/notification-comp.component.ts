import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-comp',
  templateUrl: './notification-comp.component.html',
  styleUrls: ['./notification-comp.component.css']
})
export class NotificationCompComponent implements OnInit 
{
  //to get dynamic data from the services and to style the snakbar use the reference to snackBar
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,public snackBarRef:MatSnackBarRef<NotificationCompComponent>) 
  { }

  ngOnInit(): void {
  }

}
