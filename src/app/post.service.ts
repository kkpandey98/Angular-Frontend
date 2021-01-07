import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import from 'rxjx'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { 

  }
  post(body)
  {
    return this.http.post('http://localhost:5000/xdf',body);
  }
}
