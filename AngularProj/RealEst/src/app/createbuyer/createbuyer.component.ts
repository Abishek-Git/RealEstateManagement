import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IBuyer } from '../IBuyer';

@Component({
  selector: 'app-createbuyer',
  templateUrl: './createbuyer.component.html',
  styleUrls: ['./createbuyer.component.css']
})
export class CreatebuyerComponent implements OnInit {
  @Input()
  buyerData : any = {
    "customerId" : 0,
    "fName" : '' ,
    "lName" : '',
    "phoneNumber" : '',
    "email" : '' ,
    "pan" : '',
    "adhar" : '',
    "password" : '' 

}
  constructor(private buyerService : CustomerService, private route : Router) { }

  ngOnInit(): void {
  }

  public customerIdmsg : any = ""
  public fNamemsg : any = ""
  public lNamemsg : any = ""
  public phoneNumbermsg : any = ""
  public emailmsg : any = ""
  public pan : any = ""
  public adharmsg : any = ""
  public passwordmsg : any = ""
  createBuyer(){ 
    this.customerIdmsg = ''
    this.fNamemsg = ''
    this.lNamemsg = ''
    this.phoneNumbermsg = ''
    this.emailmsg = ''
    this.pan = ''
    this.adharmsg = ''
    this.passwordmsg = ''
    if (
      this.buyerData.fNamemsg == '' || this.buyerData.fNamemsg == null ) {
      this.fNamemsg = 'Enter Valid FirstName';
      throw new Error();
    }
    if (
      this.buyerData.lNamemsg == '' || this.buyerData.lNamemsg == null ) {
      this.lNamemsg = 'Enter Valid LastName';
      throw new Error();
    }
    if(!isEmail(this.buyerData.email)){
      this.emailmsg = "Email is Invalid"
      throw new Error
    }
    if (this.buyerData.phoneNumber < 999999999) {
      this.phoneNumbermsg = 'Enter valid mobile number';
      throw new Error();
    }
    
    if (this.buyerData.pan == '' || this.buyerData.pan == null) {
      this.pan = 'Enter valid PAN';
      throw new Error();
    }
    if (this.buyerData.adhar == '' || this.buyerData.adhar == null) {
      this.pan = 'Enter valid adhar';
      throw new Error();
    }
    if (this.buyerData.customerId < 9999) {
      this.customerIdmsg = 'Enter atlest 4 digit';
      throw new Error();
    }
    
    this.buyerService.createBuyer(this.buyerData).subscribe(data=> this.route.navigate(['/adminmenu'])  )
  }

  ngAfterViewInit(){
    
  }
  
}


function isEmail(email : string) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}