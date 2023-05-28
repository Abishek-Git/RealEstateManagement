import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public services = [
    {id:1,name:'Buyer'},
    {id:2,name:'Seller'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
