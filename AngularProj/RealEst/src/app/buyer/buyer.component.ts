import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  
  @Output() data: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() {}

  ngOnInit(): void {
    this.data.emit(['Wishlist', 'Personal Info', 'Bank']);
  }

}

