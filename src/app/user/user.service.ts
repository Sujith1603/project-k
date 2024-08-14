import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://doc-k-def0a-default-rtdb.firebaseio.com/user.json';

  constructor(private httpClient: HttpClient) { }
  
  getUser(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.httpClient.get<User>(this.apiUrl);
  }

  updateUser(userId: string, userData: any): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.httpClient.put<User>(this.apiUrl, userData);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.httpClient.delete(this.apiUrl);
  }
}
