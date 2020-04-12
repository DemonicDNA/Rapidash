import { Component, OnInit } from '@angular/core';
import { AlertModel } from '../alert/alert-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alert-controller',
  templateUrl: './alert-controller.component.html',
  styleUrls: ['./alert-controller.component.css']
})
export class AlertControllerComponent implements OnInit {

  alerts: AlertModel[] = [
  ];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.http.get('http://localhost:1337').subscribe((alerts: AlertModel[]) => {
        this.alerts = [];
        alerts.forEach((alert: AlertModel) => this.alerts.push(new AlertModel(alert.message, alert.severity, new Date(alert.time))));
      }, 
      error => {
        this.alerts = [new AlertModel(error.message, "Error", new Date())]
      });
    }, 2000);
  }

}
