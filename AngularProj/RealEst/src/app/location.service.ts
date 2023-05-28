import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from './ILocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private restUrl : string = 'http://localhost:8080/realesmgnt/property'
  
  httpOptions = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  getAllLocations():Observable<ILocation[]>{
    return this.http.get<ILocation[]>(this.restUrl+"/getlocation", this.httpOptions );
  }

}
