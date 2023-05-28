import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'customer',
  templateUrl: './customer-redirect.component.html',
  styleUrls: ['./customer-redirect.component.css']
})
export class CustomerRedirectComponent implements OnInit {
  public services = [
    {id:1,name:'Buyer'},
    {id:2,name:'Seller'}
  ];
  constructor(public router:Router) { }
  onClick(service:any){
    this.router.navigate(['/customer',service.name])
    console.log(service.name)
    console.log(this.router.navigate(['/customer',service.name]))
  }
  ngOnInit(): void {
  }

}

