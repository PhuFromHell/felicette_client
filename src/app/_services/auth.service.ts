import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'sigin'
      , {username, password}
      , httpOptions
    );
  }

  register(username: string, email: string, phone_no: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup'
      , {username, email, phone_no, password}
      , httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      AUTH_API + 'logout'
      , {}
      , httpOptions
    );
  }

}
