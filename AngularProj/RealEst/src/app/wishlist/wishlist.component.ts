import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IBuyer } from '../IBuyer';
import { IUser } from '../IUser';
import { PropertyService } from '../property.service';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public buyerData: IBuyer = {
    customerId: 0,
    buyerId: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: '',
    pan: '',
    adhar: '',
    password: '',
    address: '',
    country: '',
    zipcode: ''
  };
  public propertyData : any = [];
  public orderData : any = [];
  constructor(private orderService : PurchaseOrderService ,private route : Router ,private buyerService : CustomerService, private propertyService : PropertyService, private aroute : ActivatedRoute) { }
  wmsg = ""
  omsg = "";
  ngOnInit(): void {
    this.authUser  = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.sid = this.authUser.id;
    
    this.buyerService.getBuyerById(this.sid).subscribe(data => this.buyerData = data);
    this.propertyService.getWishistByBuyerId(this.sid).subscribe(data=> {
      this.propertyData = data;
      console.log(data.length);

      if( data.length == 0){
        this.wmsg = "WishList is Empty, Add your fav items"
      }else{
        this.wmsg = ""
      }
    });
    this.orderService.getOrderByBuyerId(this.sid).subscribe(datas=>{ 
      this.orderData = datas
      if( this.orderData.length == 0){
        this.omsg = "You have no orders placed"
      }else{
        this.omsg = ""
      }
    });
    
  }
  authUser: any;
  sid !: number  ;

  wishDelete(property_Id : number){
    this.propertyService.deleteWishList(property_Id, this.sid).subscribe(data=>{this.propertyData = data})
  }

  toProfile(buyerId : number){
    this.route.navigate(['/profile/'+buyerId]);
  }
  toProfileEdit(buyerId : number){
    this.route.navigate(['updatebuyer/'+buyerId]);
  }

  orderDelete(Id : number ){
    this.orderService.deleteOrder(Id).subscribe();
    window.location.reload();
  }
}
