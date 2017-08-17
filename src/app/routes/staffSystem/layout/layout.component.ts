import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed: Boolean;

  constructor(public router: Router  , public route: ActivatedRoute) {
    this.router.navigate(['staffWorkLog'], {relativeTo: route});
   }

  ngOnInit() {
  }

}
