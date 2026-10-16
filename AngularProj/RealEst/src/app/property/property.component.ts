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
 
  value : any;

  public authUser : any ;


  convert(val:any)
  {
    return parseInt(val);
  }

  galleryImage(offset: number): string {
    const propertyId = Number(this.value);
    const hero = Number.isInteger(propertyId) && propertyId >= 1 && propertyId <= 12
      ? `assets/images/listing-${propertyId}.jpg`
      : 'assets/images/reg.jpg';
    if (offset === 0) {
      return hero;
    }
    if (offset === 1) {
      return 'assets/images/service-interior.jpg';
    }
    return 'assets/images/home-consultation.jpg';
  }

 ngOnInit(): void {
    this.value = this.route.snapshot.params['id'];

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
   this.isBuyer = this.authUser?.user == "buyer"
   this.canBuy = !this.authUser || this.authUser?.user == "buyer"
  
}
addToCart(){
  if (!this.authUser || this.authUser.user != 'buyer') {
    this.router.navigate(['/login']);
    return;
  }
  this.router.navigate(['/cart/',this.propertyData.property_Id]);
}

addMarker(latitude: number, longitude: number) {
  console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  this.propertyData.latitude = latitude;
  this.propertyData.longitude = longitude;
}

public isBuyer : boolean = false;
public canBuy : boolean = true;



}
