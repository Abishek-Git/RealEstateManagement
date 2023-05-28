import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin-editseller',
  templateUrl: './admin-editseller.component.html',
  styleUrls: ['./admin-editseller.component.css']
})
export class AdminEditsellerComponent implements OnInit {
  sellerData: any = {
    customerId: 0,
    sellerId: 0,
    fName: '',
    lName: '',
    phoneNumber: 0,
    email: '',
    pan: '',
    adhar: '',
    password: '',
  };

  sellerId : any = this.aroute.snapshot.params['sellerid'];


  constructor(private sellerService : CustomerService, private aroute : ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.sellerService.getSellerById(this.sellerId).subscribe(data => this.sellerData = data)

  }

  updateSeller(){
    this.sellerService.updateSeller(this.sellerData).subscribe((data : {} )=> this.route.navigate(['/adminmenu']));

  }

}
