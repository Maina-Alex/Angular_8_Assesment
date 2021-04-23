import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthServiceService {
private user:User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public isLogged: boolean;

  constructor(private http: HttpClient, private router:Router) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }


  login(username, password) {
      let parameter=JSON.stringify({"username":username , "password":password});
      return this.http.post<any>(`${environment.baseUrl}/login`, parameter)
          .pipe(first())
          .subscribe(
            (data: HttpResponse<any>) => {
                this.user.username=username;
                this.user.password=password;
                this.user.token=data.headers.get('Authorization');
                localStorage.setItem('currentUser',JSON.stringify(this.user));
                this.currentUserSubject.next(this.user);
                this.router.navigateByUrl('/create-webuser')
                this.isLogged=true;
              }, err => {
                console.log(err.message);
              }
          )
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
