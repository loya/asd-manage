import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed: Boolean;
  activedMenuItem = '';

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    // tslint:disable-next-line:max-line-length
  }

  ngOnInit() {
    // console.log('layout init');
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }).subscribe(r => {
        this.setActivedMenuItem();
      });

    this.setActivedMenuItem();

  }

  private setActivedMenuItem() {
    const temp = this.router.url.split('/');
    this.activedMenuItem = temp[temp.length - 1].replace('staffSystem', 'staffWorkLog');
  }

}
