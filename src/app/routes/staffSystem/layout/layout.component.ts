import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed: Boolean;
  activedMenuItem= '';

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    // tslint:disable-next-line:max-line-length
  }

  ngOnInit() {
    console.log('layout init');
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .subscribe(event =>
        // !event ?  '' : console.log('layout url:' + event.snapshot.url[0].path) );
         // !event.snapshot.url[0] ?  '' : console.log('layout url:' + event.snapshot.url[0].path)
         !event.snapshot.url[0] ?   this.router.navigate(['./staffSystem/staffWorkLog']) : this.activedMenuItem = event.snapshot.url[0].path
      );
      this.activatedRoute.firstChild.url.subscribe(v =>
      v.length === 0  ? this.router.navigate(['./staffSystem/staffWorkLog']) :  this.activedMenuItem = v[0].path );
}

}
