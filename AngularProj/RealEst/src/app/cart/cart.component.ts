import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IpurchaseOrder } from '../IPurchaseOrder';
import { PropertyService } from '../property.service';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  order : any;

  public propertyData: any;
  public buyerData: any = {};
  public sellerData: any = {};
  authUser: any = {};
  sdata: any;
  ngOnInit(): void {
    this.authUser = sessionStorage.getItem('authUser');
    this.authUser = JSON.parse(this.authUser);
    this.buyerService.getBuyerById(this.authUser.id).subscribe((data)=> {
      this.buyerData = data;
      
    });
    this.propertyService
      .getPropertyById(this.propertyId)
      .subscribe((data) => {
        this.propertyData = data;
        this.buyerService.getSellerById(this.propertyData.seller.sellerId).subscribe((data) => {
          this.sellerData = data;
        });
      });

    
  }
  title = 'Google Pay Demo';
  constructor(
    public route: Router,
    public buyerService: CustomerService,
    public propertyService: PropertyService,
    private aroute: ActivatedRoute,
    private orderService : PurchaseOrderService
  ) {}

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '0518-1492-2383',
      merchantName: 'kavya kumar',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '10',
      currencyCode: 'INR',
      countryCode: 'IN',
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION'],
  };

  onLoadPaymentData = (event: Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  };

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
  ) => {
    console.log('payment authorized', paymentData);
    this.route.navigate(['wishlist']);
    return {
      transactionState: 'SUCCESS',
    };
  };

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  };

  propertyId = this.aroute.snapshot.params['propertyid'];

  createOrder(){
    this.orderService.createOrder(this.propertyId, this.authUser.id).subscribe(data=>
      this.route.navigate(['wishlist'])
      );
  }




  
}
