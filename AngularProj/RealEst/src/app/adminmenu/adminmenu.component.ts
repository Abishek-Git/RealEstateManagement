import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

import { PropertyService } from '../property.service';
import * as $ from 'jquery';
import { ISeller } from '../ISeller';
import { PurchaseOrderService } from '../purchase-order.service';


@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {
  public sellerList : any[] = [];
  public buyerList : any[] = [];
  public propertyList : any[] = [];
  public orderList : any[] = []
  buyerCount : any = 0 ;
  sellerCount : any = 0 ;
  propertyCount : any = 0 ;
  orderCount : number= 0 ;

  ngAfterViewInit(){
    $("#buyertrig").click(function(){
      $("#buyert").addClass("todisplay");
      $("#buyert").removeClass("buyer");
      $("#sellert").addClass("seller");
      $("#propertyt").addClass("property");
      $("#ordert").addClass("order");

    });
    $("#sellertrig").click(function(){
      $("#sellert").addClass("todisplay");
      $("#sellert").removeClass("seller");
      $("#buyert").addClass("buyer");
      $("#propertyt").addClass("property");
      $("#ordert").addClass("order");

    });
    $("#proptrig").click(function(){
      $("#propertyt").addClass("todisplay");
      $("#propertyt").removeClass("property");
      $("#sellert").addClass("seller");
      $("#buyert").addClass("buyer");
      $("#ordert").addClass("order");

    });
    $("#ordertrig").click(function(){
      $("#ordert").addClass("todisplay");
      $("#ordert").removeClass("order");
      $("#propertyt").addClass("property");
      $("#sellert").addClass("seller");
      $("#buyert").addClass("buyer");
    });
  }

  constructor(private customerService : CustomerService, private propertyService: PropertyService ,
    private OrderService : PurchaseOrderService,private route: Router) { }

  ngOnInit(): void {
    this.customerService.getBuyerList().subscribe(buyerData=>{ 
      this.buyerList = buyerData;
      this.buyerCount = buyerData.length;
    });
    this.customerService.getSellerList().subscribe(sellerData=> {
      this.sellerList = sellerData;
      this.sellerCount = sellerData.length;
    });
    this.propertyService.getPropertyList().subscribe(propertyData=> {
      this.propertyList = propertyData;
      this.propertyCount = propertyData.length;
    
    });
    this.OrderService.getOrderList().subscribe(orderData=>{ 
      this.orderList = orderData;
      this.orderCount = orderData.length;
    });

    

  }

  // EDIT AND DELETE BUYER 

  

  deleteBuyer(buyer : any){
    if (window.confirm('Are your sure, you want to delete?')){
      console.log(buyer.buyerId + "  id  " + buyer);
      
      this.customerService.deleteBuyer(buyer.buyerId).subscribe(data=> {
        this.route.navigate(['adminmenu'])
      });
    }
  }

  deleteProperty(propertyId : number){
   if (window.confirm('Are your sure, you want to delete?')){
      
      this.propertyService.deleteProperty(propertyId).subscribe(data=> {
        this.ngOnInit();
        this.route.navigate(['adminmenu'])
      });
    }
  }

  deleteOrder(purhcaseId : number){
    if (window.confirm('Are your sure, you want to delete?')){
       
       this.OrderService.deleteOrder(purhcaseId).subscribe(data=> {
         this.route.navigate(['adminmenu'])
       });
     }
   }
   
   public property_Type : any;
   
   search(){     
     if(this.property_Type == ""){
       this.ngOnInit();
     }else{
       this.propertyList = this.propertyList.filter( res => {
          return res.property_Type.toLocaleLowerCase().match(this.property_Type.toLocaleLowerCase())
       })
     }
   }

   key: string = "property_Id";
   reverse : boolean = false;
   sort(key:string){
     this.key = key;
     this.reverse = !this.reverse;
   }

   public fName : any;
   searchSeller(){     
    if(this.fName == ""){
      this.ngOnInit();
    }else{
      this.sellerList = this.sellerList.filter( res => {
         return res.fName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase())
      })
    }
  }

   searchBuyer(){     
    if(this.fName == ""){
      this.ngOnInit();
    }else{
      this.buyerList = this.buyerList.filter( res => {
         return res.fName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase())
      })
    }
  }

  searchOrder(){     
    if(this.property_Type == ""){
      this.ngOnInit();
    }else{
      this.orderList = this.orderList.filter( res => {
         return res.property_Type.toLocaleLowerCase().match(this.property_Type.toLocaleLowerCase())
      })
    }
  }


}
