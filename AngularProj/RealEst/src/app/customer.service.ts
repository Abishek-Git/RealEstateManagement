import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBuyer } from './IBuyer';
import { ISeller } from './ISeller';
import { SEED_BUYER, SEED_BUYERS, SEED_SELLERS } from './seed/seed-data';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private restUrl : string = 'http://localhost:8080/realesmgnt/home'

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  // Buyer Part CRUD OP

  createBuyer(buyer:any):Observable<IBuyer>{
    return this.http.post<any>(this.restUrl+"/registerBuyer", JSON.stringify(buyer),this.httpOptions );
  }

  deleteBuyer(bid:any){
    console.log(bid);

    return this.http.delete<IBuyer>(this.restUrl+"/deleteBuyer/" +bid);
    
  }

  updateBuyer(buyer: any): Observable<IBuyer>{
    return this.http.put<IBuyer>(this.restUrl + '/updateBuyer/',JSON.stringify(buyer), this.httpOptions)
  }

  getBuyerList():Observable<IBuyer[]>{
    return this.http.get<IBuyer[]>(this.restUrl+"/allcustomer").pipe(
      catchError(() => of(SEED_BUYERS))
    )
  }

  getBuyerById(buyerId: any):Observable<IBuyer>{
    return this.http.get<IBuyer>(this.restUrl + '/buyerbyid/'+ buyerId, this.httpOptions).pipe(
      catchError(() => of(SEED_BUYERS.find(b => b.buyerId == buyerId) || SEED_BUYER))
    )
  }

  // SELLER Part CRUD OP

  createSeller(seller:any):Observable<ISeller>{
    return this.http.post<ISeller>(this.restUrl+"/createseller", JSON.stringify(seller),this.httpOptions );
  }

  deleteSeller(sid:any){
    return this.http.delete<ISeller>(this.restUrl+"/deleteseller/" +sid);
  }

  updateSeller(seller: any): Observable<ISeller>{
    return this.http.put<ISeller>(this.restUrl + '/updateseller/',JSON.stringify(seller), this.httpOptions)
  }

  getSellerList():Observable<ISeller[]>{
    return this.http.get<ISeller[]>(this.restUrl+"/getseller").pipe(
      catchError(() => of(SEED_SELLERS))
    )
  }

  getSellerById(sellerId: number) :Observable<ISeller>{
    return this.http.get<ISeller>(this.restUrl + '/sellerbyid/'+ sellerId).pipe(
      catchError(() => of(SEED_SELLERS.find(s => s.sellerId == sellerId) || SEED_SELLERS[0]))
    );
  }
  

}
