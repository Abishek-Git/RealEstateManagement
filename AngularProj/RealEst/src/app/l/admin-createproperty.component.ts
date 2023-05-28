import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-admin-createproperty',
  templateUrl: './admin-createproperty.component.html',
  styleUrls: ['./admin-createproperty.component.css']
})
export class AdminCreatepropertyComponent implements OnInit {
  propertyData : any = {
    property_Id : 0,
    property_Type : '',
    price : 0,
    status : false,
    contact : '',
    description : '',
    seller : {}
  }

  sellerId : any = this.aroute.snapshot.params['sellerid'];

  sellerData : any = {
    customerId : 0,
    sellerId : 0,
    fName : '',
    lName :'',
    phoneNumber : 0,
    email : '',
    pan : '',
    adhar : '',
    password : '',

}
  constructor(private propertyService : PropertyService,private aroute: ActivatedRoute,private sellerService : CustomerService, private route:Router) { }

  ngOnInit(): void {
    this.sellerService.getSellerById(this.sellerId).subscribe(data=>{
      this.sellerData = data;
      this.propertyData.seller = data;
    });
    
  }

  createProperty(){
    this.propertyService.createProperty(this.propertyData).subscribe(data=> this.route.navigate(['/adminmenu']) )
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
