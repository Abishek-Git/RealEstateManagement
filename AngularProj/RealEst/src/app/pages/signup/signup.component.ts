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
    $(document).ready(function() {
      $('#password').keyup(function() {
      $('#result').html(checkStrength($('#password').val()))
      })
      function checkStrength(password : any) {
      var strength = 0
      if (password.length < 6) {
      $('#result').removeClass()
      $('#result').addClass('short')
      return 'Too short'
      }
      if (password.length > 7) strength += 1
      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
      // If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
      // If it has one special character, increase strength value.
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
      // If it has two special characters, increase strength value.
      if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
      // Calculated strength value, we can return messages
      // If value is less than 2
      if (strength < 2) {
      $('#result').removeClass()
      $('#result').addClass('weak')
      return 'Weak'
      } else if (strength == 2) {
      $('#result').removeClass()
      $('#result').addClass('good')
      return 'Good'
      } else {
      $('#result').removeClass()
      $('#result').addClass('strong')
      return 'Strong'
      }
      }
      });
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
errmsg : any;
createAccount(){
  this.errmsg = ""
  if(this.accData.fName == null || this.accData.fName == ""){
    this.errmsg = "first Name is required"
    throw new Error
  }
  
  if(this.accData.lName == null || this.accData.lName == ""){
    this.errmsg = "Last Name is required"
    throw new Error
  }
  if(!isEmail(this.accData.email)){
    this.errmsg = "Email is Invalid"
    throw new Error
  }
  if (this.accData.phoneNumber <= 999999999 || this.accData.phoneNumber >= 99999999999 ) {
    this.errmsg = 'Enter valid mobile number';
    throw new Error
  }
  if (this.accData.pan == '' || this.accData.pan == null) {
    this.errmsg = 'Enter valid PAN';
    throw new Error
  }
  if (this.accData.adhar == '' || this.accData.adhar == null) {
    this.errmsg = 'Enter valid adhar';
    throw new Error
  }
  if(checkStrength2(this.accData.password) == ('Weak' || 'Too short')){
    this.errmsg = "Enter Strong password"
    throw new Error
  }
  if(this.set == null || this.set == ""){
    this.errmsg = "select your Role!"
    throw new Error
  } 
  if(this.set=="buyer"){
      this.buyerService.createBuyer(this.accData).subscribe(data=> this.route.navigate(['/login']),
      error=> this.errmsg = "Email Id is already Registered"   )
  }
  else if(this.set=="seller")
  {
    this.buyerService.createSeller(this.accData).subscribe(data=> this.route.navigate(['/login']),
    error=> this.errmsg = "Email Id is already Registered" )
  }
}
}

function isEmail(email : string) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function checkStrength2(password : any) {
  var strength = 0
  if (password.length < 6) {
  return 'Too short'
  }
  if (password.length > 7) strength += 1
  // If password contains both lower and uppercase characters, increase strength value.
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
  // If it has numbers and characters, increase strength value.
  if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
  // If it has one special character, increase strength value.
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
  // If it has two special characters, increase strength value.
  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
  // Calculated strength value, we can return messages
  // If value is less than 2
  if (strength < 2) {
  return 'Weak'
  } else if (strength == 2) {
  return 'Good'
  } else {
  return 'Strong'
  }
  }
  