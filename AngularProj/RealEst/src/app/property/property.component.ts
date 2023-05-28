import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public propertyData : any = [];
  public sellerData : any = [];
  constructor(private router : Router,private route: ActivatedRoute,private sellerService :CustomerService,private propertyService : PropertyService) { }
 
  value = this.route.snapshot.params['id'];

  public authUser : any ;


  convert(val:any)
  {
    return parseInt(val);
  }
 ngOnInit(): void {
    
    this.propertyService
    .getPropertyById(this.value)
    .subscribe((data) => {
      this.propertyData = data;
      this.sellerService.getSellerById(this.propertyData.seller.sellerId).subscribe((data) => {
        this.sellerData = data;
      });
    });
   this.authUser = sessionStorage.getItem("authUser");
   this.authUser = JSON.parse(this.authUser);
   this.isBuyer = this.authUser.user == "buyer"
  
}
addToCart(){
  this.router.navigate(['/cart/',this.propertyData.property_Id]);
}

addMarker(latitude: number, longitude: number) {
  console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  this.propertyData.latitude = latitude;
  this.propertyData.longitude = longitude;
}

public isBuyer : boolean = false;



}
