import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProperty } from './IProperty';
import { SEED_PROPERTIES, SEED_WISHLIST } from './seed/seed-data';

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
    return this.http.get<IProperty[]>(this.restUrl+"/getproperty").pipe(
      catchError(() => of(SEED_PROPERTIES))
    )
  }

  getPropertyById(propertyId : number):Observable<IProperty>{
    return this.http.get<IProperty>(this.restUrl+"/getpropertybyid/"+ propertyId ).pipe(
      catchError(() => of(SEED_PROPERTIES.find(p => p.property_Id == propertyId) || SEED_PROPERTIES[0]))
    );
  }

  //need to add
  getWishistByBuyerId(buyerId : number){
    return this.http.get<IProperty[]>(this.restUrl+"/wishlistbyid/"+buyerId).pipe(
      catchError(() => of(SEED_WISHLIST))
    )
  }

  getPropertyBySellerId(sellerId : number):Observable<IProperty>{
    return this.http.get<IProperty>(this.restUrl+"/propertybysellerid/"+ sellerId ).pipe(
      catchError(() => of(SEED_PROPERTIES.filter(p => p.seller.sellerId == sellerId) as any))
    );
  }

  deleteWishList(propertyId : number, buyerId : number):Observable<IProperty>{
    return this.http.get<IProperty>('http://localhost:8080/realesmgnt/home'+"/wishlistremove/"+buyerId+"/"+propertyId);
  }

  addWishList(propertyId : number, buyerId : number):Observable<IProperty>{
    return this.http.get<IProperty>('http://localhost:8080/realesmgnt/home'+"/wishlistadd/"+buyerId+"/"+propertyId);
  }
  
}



  

  