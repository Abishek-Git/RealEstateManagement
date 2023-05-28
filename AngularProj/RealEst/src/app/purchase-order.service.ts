import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpurchaseOrder } from './IPurchaseOrder';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private restUrl : string = 'http://localhost:8080/realesmgnt/purchaseorder'

  httpOptions = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  createOrder(pid:number, bid:number){
    return this.http.get<IpurchaseOrder>(this.restUrl+"/createpurchaseOrder/"+pid+"/"+bid);
  }

  deleteOrder(pid:any){
    return this.http.delete<IpurchaseOrder>(this.restUrl+"/deletepurchaseOrder/" +pid);
  }

  updateOrder(order: any): Observable<IpurchaseOrder>{
    return this.http.put<IpurchaseOrder>(this.restUrl + '/updatepurchaseOrder/',JSON.stringify(order), this.httpOptions)
  }

  getOrderList():Observable<IpurchaseOrder[]>{
    return this.http.get<IpurchaseOrder[]>(this.restUrl+"/getpurchaseOrder")
  }

  getOrderByBuyerId(buyerId : number):Observable<IpurchaseOrder[]>{
    return this.http.get<IpurchaseOrder[]>(this.restUrl+"/orderbybuyerid/"+buyerId)
  }



}
