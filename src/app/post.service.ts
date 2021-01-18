import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { 

  }
  post(body)
  {
    console.log('http://localhost:5000/User/Register', body);
    return this.http.post('http://localhost:5000/User/Register', body);
    //return null;
  }
}
