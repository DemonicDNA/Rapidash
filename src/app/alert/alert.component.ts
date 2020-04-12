import { Component, OnInit, Input } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { AlertModel } from './alert-model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() model : AlertModel;

  constructor() { 
  }

  ngOnInit() {
  }

}
