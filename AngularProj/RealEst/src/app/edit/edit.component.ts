import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public propertyData: any = {
    property_Id: 0,
    property_Type: '',
    price: 0,
    status: false,
    contact: '',
    description: '',
    seller: {}
  };

  propertyId: any = this.aroute.snapshot.params['id'];

  public sellerData: any = {
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

  authUser: any;
  sid !: number  ;

  constructor(
    private propertyService: PropertyService,
    private sellerService: CustomerService,
    private aroute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.propertyService
      .getPropertyById(this.propertyId)
      .subscribe((data) => {
        this.propertyData = data;
        this.sellerService.getSellerById(this.propertyData.seller.sellerId).subscribe((data) => {
          this.sellerData = data;
        });
      });

    
  }

  updateProperty(){
    this.propertyService.updateProperty(this.propertyData).subscribe(data=> this.route.navigate(['/sellerlist/']));
  }

    
getCurrentLocation() {
  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(position=>{
      const coords = position.coords;
      this.propertyData.latitude = coords.latitude
      this.propertyData.longitude = coords.longitude
    }, this.error, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    });

  }
}
error(err : any) {
}

addMarker(latitude: number, longitude: number) {
  console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  this.propertyData.latitude = latitude;
  this.propertyData.longitude = longitude;
}
}