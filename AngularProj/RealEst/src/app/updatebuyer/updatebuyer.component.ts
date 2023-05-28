import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IBuyer } from '../IBuyer';

@Component({
  selector: 'app-updatebuyer',
  templateUrl: './updatebuyer.component.html',
  styleUrls: ['./updatebuyer.component.css']
})
export class UpdatebuyerComponent implements OnInit {

  buyerData : IBuyer = {
    customerId: 0,
    buyerId: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: '',
    pan: '',
    adhar: '',
    password: '',
    address: '',
    country: '',
    zipcode: ''
  }
  constructor(private buyerService : CustomerService, private aroute : ActivatedRoute, private route:Router) { }

  buyerId : any = this.aroute.snapshot.params['buyer'];

  ngOnInit(): void {
    this.buyerService.getBuyerById(this.buyerId).subscribe(data => this.buyerData = data)
  }

  updateBuyer(){
    this.buyerService.updateBuyer(this.buyerData).subscribe((data : {} )=> this.route.navigate(['/profile/'+this.buyerData.buyerId]));

  }

}
