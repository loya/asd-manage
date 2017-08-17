import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '阿斯达科技管理系统';

  isVisible = true;

  hideLink(hideLink: boolean) {
    this.isVisible = !hideLink;
    console.log(this.isVisible);
  }
}
