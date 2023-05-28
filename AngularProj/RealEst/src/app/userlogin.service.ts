import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBuyer } from './IBuyer';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private restUrl : string = 'http://localhost:8080/realesmgnt/home'

  constructor(private http : HttpClient , private router: Router) { }
  httpOptions = {
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  loginBuyer(buyer : any):Observable<IUser>{
    return this.http.post<IUser>(this.restUrl+"/blogin", buyer,this.httpOptions );

  }
  loginSeller(seller : any):Observable<IUser>{
    return this.http.post<IUser>(this.restUrl+"/slogin", JSON.stringify(seller),this.httpOptions );
  }

  logout(){
    sessionStorage.removeItem("authUser");
    this.router.navigate(['/login']);
  }

  loginAdmin(admin : any):Observable<IUser>{
    return this.http.post<IUser>(this.restUrl+"/adminlogin", JSON.stringify(admin), this.httpOptions);
  }

}
