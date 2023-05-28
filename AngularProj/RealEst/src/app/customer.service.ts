import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBuyer } from './IBuyer';
import { ISeller } from './ISeller';


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
    return this.http.get<IBuyer[]>(this.restUrl+"/allcustomer")
  }

  getBuyerById(buyerId: any):Observable<IBuyer>{
    return this.http.get<IBuyer>(this.restUrl + '/buyerbyid/'+ buyerId, this.httpOptions)
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
    return this.http.get<ISeller[]>(this.restUrl+"/getseller")
  }

  getSellerById(sellerId: number) :Observable<ISeller>{
    return this.http.get<ISeller>(this.restUrl + '/sellerbyid/'+ sellerId);
  }
  

}
