import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { JwtAuthResponse } from './jwt-auth-response';
import { LoginPayload } from './login-payload';
import {map} from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
import { StudentPayload } from './student-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAdmin = 'http://localhost:8080/api/auth/';
  private urlStudent = 'http://localhost:8080/api/student/';
  constructor(private httpClient: HttpClient,private localStorageService:LocalStorageService ) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.urlAdmin + 'signup', registerPayload);
  }
  createStudent(studentPayload: StudentPayload): Observable<any> {
    return this.httpClient.post(this.urlStudent + 'create', studentPayload);
  }
  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.urlAdmin + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }
}
