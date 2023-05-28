import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from 'src/app/IUser';
import { UserloginService } from 'src/app/userlogin.service';
enum CheckBoxType {
  BUYER,
  SELLER,
  NONE,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  msg: any;

  constructor(
    private _snackBar: MatSnackBar,
    private userLogin: UserloginService,
    private route : Router
  ) {}
  public user = {
    email: '',
    password: '',
    user: '',
  };


  
  authUser : IUser = {
    id: 0,
    email: '',
    password: '',
    user: ''
  };
  ngOnInit(): void {}

  formSubmit() {
    if (this.user.email == '' || this.user.email == null) {
      //alert('User is required !');
      this._snackBar.open('email is required!', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    } else {
      if(this.user.user == 'buyer') {
        this.userLogin
          .loginBuyer(this.user)
          .subscribe(data =>{
            this.authUser  = data;
            sessionStorage.setItem('authUser', JSON.stringify(data));    
            console.log(this.authUser)
            this.route.navigate(['/home'])
            
          },
          error=>{
            this.msg = "Bad credentials, Enter Valid mail and password"
            console.log("Exception occured");
            
          });
      }else{
        this.userLogin
          .loginSeller(this.user)
          .subscribe((data) =>{
            this.authUser  = data;
            sessionStorage.setItem('authUser',  JSON.stringify(data));
            console.log(this.authUser)
            this.route.navigate(['/sellerlist/'])
          },error=>{
            this.msg = "Bad credentials, Enter Valid mail and password"
            console.log("Exception occured");
            
          });
      }
    }
  }

  // public set! : string ;
  typeOfUser(val: string) {
    if (val == 'seller') {
      this.user.user = 'seller';
    } else {
      this.user.user = 'buyer';
    }
  }

  check_box_type = CheckBoxType;

  currentlyChecked!: CheckBoxType;

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }
}
