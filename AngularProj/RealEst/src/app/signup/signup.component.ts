import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import * as $ from 'jquery';
enum CheckBoxType { BUYER, SELLER, NONE };

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  constructor(private buyerService : CustomerService, private route : Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input()
  accData : any = {
    "customerId" : 0,
    "fName" : '' ,
    "lName" : '',
    "phoneNumber" : '',
    "email" : '' ,
    "pan" : '',
    "adhar" : '',
    "password" : '' 
  }
  // formSubmit() {
  //   console.log(this.user);
  //   if(this.user.username == '' || this.user.username == null){
  //     //alert('User is required !');
  //     this._snackBar.open('Username is required!', 'OK', {
  //       duration: 3000,
  //       verticalPosition: 'top',
  //       horizontalPosition: 'right',
  //     });
  //     return;
  //   }
  //}
public set! : string ;
typeOfUser(val:string){
  if(val=="seller")
  {
    this.set="seller"
  }
  else{
    this.set="buyer"
  }
}
createAccount(){
  if(this.set=="buyer"){
      this.buyerService.createBuyer(this.accData).subscribe(data=> this.route.navigate(['/list'])  )
  }
  else if(this.set=="seller")
  {
    this.buyerService.createSeller(this.accData).subscribe(data=> this.route.navigate(['/sellerlist'])  )
  
  }
}
}