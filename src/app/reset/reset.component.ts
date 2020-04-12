import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css', '../app.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleReset(){
    this.http.post('http://localhost:1337/reset', "",{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text',
      observe: "response"
   }).subscribe( (resp) => {
      console.log(resp);
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
