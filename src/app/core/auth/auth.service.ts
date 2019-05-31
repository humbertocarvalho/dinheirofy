import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(email: string, password: string) {
    return this.http
      .post(
        API_URL + '/session/auth',
        { email, password },
        { observe: 'response' }
      )
      .pipe(
        tap(res => {
          console.log(res);
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken);
          console.log(`User ${email} authenticated with token ${authToken}`);
        })
      );
  }
}
