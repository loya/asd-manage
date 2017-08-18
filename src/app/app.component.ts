import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '阿斯达科技管理系统';

  isVisible = true;

  hideLink(hideLink: boolean) {
    this.isVisible = !hideLink;
    console.log(this.isVisible);
  }

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('app init');
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        // let route1: any;
        while (route.firstChild) {
           route = route.firstChild;
        }
        return route;
      })
      .subscribe(
        event =>
        !event.snapshot.url[0] ?   (this.router.url.endsWith('staffSystem') ? this.isVisible = false : '')
         : this.isVisible = false);
  }

}
