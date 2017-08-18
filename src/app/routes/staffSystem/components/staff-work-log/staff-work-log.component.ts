import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-staff-work-log',
  templateUrl: './staff-work-log.component.html',
  styleUrls: ['./staff-work-log.component.css']
})
export class StaffWorkLogComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
    console.log('staff work log construtor');


  }

  ngOnInit() {
    console.log('staffworklog init');
  }

}
