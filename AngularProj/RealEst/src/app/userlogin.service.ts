import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBuyer } from './IBuyer';
import { IUser } from './IUser';
import { demoLogin } from './seed/seed-data';

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
    return this.http.post<IUser>(this.restUrl+"/blogin", buyer,this.httpOptions ).pipe(
      catchError(err => {
        const demo = demoLogin('buyer', buyer.email, buyer.password);
        return demo ? of(demo) : throwError(() => err);
      })
    );
  }
  loginSeller(seller : any):Observable<IUser>{
    return this.http.post<IUser>(this.restUrl+"/slogin", JSON.stringify(seller),this.httpOptions ).pipe(
      catchError(err => {
        const demo = demoLogin('seller', seller.email, seller.password);
        return demo ? of(demo) : throwError(() => err);
      })
    );
  }

  logout(){
    sessionStorage.removeItem("authUser");
    this.router.navigate(['/login']);
  }

  loginAdmin(admin : any):Observable<IUser>{
    return this.http.post<IUser>(this.restUrl+"/adminlogin", JSON.stringify(admin), this.httpOptions).pipe(
      catchError(err => {
        const demo = demoLogin('admin', admin.email, admin.password);
        return demo ? of(demo) : throwError(() => err);
      })
    );
  }

}
