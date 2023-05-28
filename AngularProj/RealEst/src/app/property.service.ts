import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from './IProperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private restUrl : string = 'http://localhost:8080/realesmgnt/property'
  
  httpOptions = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  createProperty(property:any):Observable<IProperty>{
    return this.http.post<IProperty>(this.restUrl+"/createproperty", JSON.stringify(property),this.httpOptions );
  }

  deleteProperty(pid:any){
    return this.http.delete<IProperty>(this.restUrl+"/deleteproperty/" +pid);
  }

  updateProperty(property: any): Observable<IProperty>{
    return this.http.put<IProperty>(this.restUrl + '/updateproperty/',JSON.stringify(property), this.httpOptions)
  }

  getPropertyList():Observable<IProperty[]>{
    return this.http.get<IProperty[]>(this.restUrl+"/getproperty")
  }

  getPropertyById(propertyId : number):Observable<IProperty>{
    return this.http.get<IProperty>(this.restUrl+"/getpropertybyid/"+ propertyId );
  }

  //need to add
  getWishistByBuyerId(buyerId : number){
    return this.http.get<IProperty[]>(this.restUrl+"/wishlistbyid/"+buyerId)
  }

  getPropertyBySellerId(sellerId : number):Observable<IProperty>{
    return this.http.get<IProperty>(this.restUrl+"/propertybysellerid/"+ sellerId );
  }

  deleteWishList(propertyId : number, buyerId : number):Observable<IProperty>{
    return this.http.get<IProperty>('http://localhost:8080/realesmgnt/home'+"/wishlistremove/"+buyerId+"/"+propertyId);
  }

  addWishList(propertyId : number, buyerId : number):Observable<IProperty>{
    return this.http.get<IProperty>('http://localhost:8080/realesmgnt/home'+"/wishlistadd/"+buyerId+"/"+propertyId);
  }
  
}



  

  