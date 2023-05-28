import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public msg :any;
url : any;
public authUser : any;
role : any ;
userData : any = {}
  constructor(public cusservice : CustomerService, public router : Router) { }

  ngOnInit(): void {
	this.authUser = sessionStorage.getItem('authUser');
    this.authUser = JSON.parse(this.authUser);
    this.role = this.authUser.user;
	if(this.role == 'buyer'){
		this.cusservice.getBuyerById(this.authUser.id).subscribe(data=> this.userData = data);
	}else if(this.role == 'seller'){
		this.cusservice.getBuyerById(this.authUser.id).subscribe(data=> this.userData = data);
	}
  }

  toEdit(id : number){
	this.router.navigate(['updatebuyer/'+id])
  }
  

}
