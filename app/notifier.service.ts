import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationCompComponent } from './notification-comp/notification-comp.component';
@Injectable({
  providedIn: 'root'
})
export class NotifierService 
{
  //snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  //This is to show snackBar
  constructor(private snackBarObj:MatSnackBar) 
  { }
  showNotification(displayMessage:string,buttonText:string)
  {
    this.snackBarObj.openFromComponent(NotificationCompComponent,
      {
        data:
        {
          message:displayMessage,
          buttonText:buttonText
        },
        duration:3500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass:'myPanel'
      })
  }
  showNotificationWithImg(displayMessage:string,buttonText:string,imgUrl:String)
  {
    this.snackBarObj.openFromComponent(NotificationCompComponent,
      {
        data:
        {
          message:displayMessage,
          buttonText:buttonText,
          imgUrl:imgUrl
        },
        duration:3500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass:'myPanel'
      })
  }
}
