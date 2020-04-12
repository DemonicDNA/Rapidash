import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.css', '../app.component.css']
})
export class BitComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleBit(){
    this.http.post('http://localhost:1337/bit', "", {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text',
      observe: "response"
   }).subscribe(resp => {
      console.log(resp);
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
