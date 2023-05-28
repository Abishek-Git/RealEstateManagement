import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from './userlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public show = true;
  public set = 1;
  public colorVal = 1;
  public classValue = 'navbar navbar-expand-lg navbar-light';
  public mode1 =
    'https://img.icons8.com/external-bearicons-glyph-bearicons/32/000000/external-moon-halloween-bearicons-glyph-bearicons.png';
  public mode2 =
    'https://img.icons8.com/external-bearicons-blue-bearicons/32/000000/external-moon-halloween-bearicons-blue-bearicons.png';
  mode = this.mode1;
  title = 'REM';
  public var!: String[];

  fire(data: any) {
    this.var = data;
    console.log('--------------------------------------');
    console.log(data);
  }

  constructor(public router: Router, private userlogin: UserloginService) {}
  darkMode($val: String) {
    if ($val == this.mode1) {
      this.mode = this.mode2;
      this.colorVal = 0;
      this.classValue = 'navbar navbar-expand-lg navbar-dark';
    } else {
      this.mode = this.mode1;
      this.colorVal = 1;
      this.classValue = 'navbar navbar-expand-lg navbar-light';
    }
  }
  optionSelected1(value: String) {
    if (value == 'admin') {
      this.router.navigate(['/adminmenu']);
    }
  }
  optionSelected2(value: String) {
    if (value == 'buyer') {
      this.router.navigate(['/profile/' + this.authUser.id]);
    }
  }
  optionSelected3(value: String) {
    if (value == 'seller') {
      this.router.navigate(['/sellerlist']);
    }
  }

  optionSelected4() {
    this.router.navigate(['/login'])
  }

  //LOGOUT
  goOut() {
    this.userlogin.logout();
  }

  //get login info

  public authUser: any;
  isBuyer: boolean = false;
  isSeller: boolean = false;
  isAdmin: boolean = false;
  isLogged: boolean = false;

  ngOnInit(): void {
    this.authUser = sessionStorage.getItem('authUser');
    this.authUser = JSON.parse(this.authUser);
    this.isLogged = this.authUser != null;
    if(this.authUser != null){
      this.isBuyer = (this.authUser.user == 'buyer')|| (this.authUser != null); 
      this.isSeller = this.authUser.user == 'seller';
      this.isAdmin = this.authUser.user == 'admin';
    }
  }
}
