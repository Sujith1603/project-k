import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this.http.post('https://doc-k-def0a-default-rtdb.firebaseio.com', formData);
  }
}
