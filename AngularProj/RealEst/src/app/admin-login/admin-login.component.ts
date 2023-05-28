import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../IUser';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private loginService: UserloginService, private route: Router) {}

  public user = {
    email: '',
    password: '',
    user: '',
  };

  authUser: IUser = {
    id: 0,
    email: '',
    password: '',
    user: '',
  };

  msg : any ="";
  ngOnInit(): void {}

  adminLog() {
    this.loginService.loginAdmin(this.user).subscribe((data) => {
      this.authUser = data;
      sessionStorage.setItem('authUser', JSON.stringify(data));
      console.log(this.authUser);
      this.route.navigate(['/adminmenu']);
    }, error=>{
      this.msg = "Bad credentials Enter valid info*"
    });
  }
}
