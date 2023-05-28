import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IUser } from '../IUser';
import { UserloginService } from '../userlogin.service';
enum CheckBoxType { BUYER, SELLER, NONE };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg!: string;

  check_box_type = CheckBoxType;

  currentlyChecked!: CheckBoxType;

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }
  constructor(private userLogin: UserloginService, private buyerService: CustomerService, private route: Router) { }
  public authUser : any;
  public isNotLogged : boolean = false;

  ngOnInit(): void {

    this.authUser = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.isNotLogged = this.authUser == null;
  }
  public user = {
    email: '',
    password: '',
    user: '',
  };
 

  public set!: string;
  typeOfUser(val: string) {
    if (val == "seller") {
      this.set = "seller"
    }
    else {
      this.set = "buyer"
    }
  }
  createAccount() {
    if(this.user.email == "" || this.user.password == ""){      
      this.msg = "please Enter your details"
      throw new Error("please Enter your details");
    }
    if(this.set == null || this.set == ""){
      this.msg = "please Select your Role"
      throw new Error("please Enter your details");
    }
    
    console.log(this.user);
    if (this.set == "buyer") {
      this.userLogin
        .loginBuyer(this.user)
        .subscribe(data => {
          this.authUser = data;
          sessionStorage.setItem('authUser', JSON.stringify(data));
          console.log(this.authUser)
          this.route.navigate(['/profile/'+this.authUser.id])
        },
          error => {
            this.msg = "Bad credentials, Enter Valid mail and password"
            console.log("Exception occured");

          });

    }
    else if (this.set == "seller") {
      this.userLogin
        .loginSeller(this.user)
        .subscribe((data) => {
          this.authUser = data;
          sessionStorage.setItem('authUser', JSON.stringify(data));
          console.log(this.authUser)
          this.route.navigate(['/sellerlist/',this.authUser.id])
        }, error => {
          this.msg = "Bad credentials, Enter Valid mail and password"
          console.log("Exception occured");

        });
    }
  }


}



