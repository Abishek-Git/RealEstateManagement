import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProperty } from '../IProperty';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-locationsort',
  templateUrl: './locationsort.component.html',
  styleUrls: ['./locationsort.component.css']
})
export class LocationsortComponent implements OnInit {
  distanceArr : any = [];
  propertyData:any={  
    latitude : 0.0,
    longitude : 0.0,
    place : "" 
    };
  location:any=[];
  constructor(private propertyService : PropertyService,private locationData : LocationsortComponent,private router : Router) { }
  data : any=[];
  ngOnInit(): void {
    this.propertyService
    .getLocationsList()
    .subscribe((data) => {
      this.propertyData = data;});
  }

   usersLocation = {
    lat: 40.713744,
    lng: -74.009056
}; 

getDistanceBetweenPoints(start: { lat: any; lng: any; }, end: { lat: any; lng: any; }){
  let earthRadius = {
      km: 6371
  };
  let R = earthRadius.km;
  let lat1 = start.lat;
  let lon1 = start.lng;
  let lat2 = end.lat;
  let lon2 = end.lng;
  let dLat = this.toRad((lat2 - lat1));
  let dLon = this.toRad((lon2 - lon1));
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
  Math.sin(dLon / 2) *
  Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
}
toRad(x: number){
  return x * Math.PI / 180;
}

load(){
  for(var prop of this.propertyData)
  {
    this.distanceArr+=this.getDistanceBetweenPoints(prop,this.usersLocation);
  }
  console.log(this.distanceArr);
}
}
