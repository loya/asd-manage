import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RoutesModule } from './routes/routes.module';
@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
     RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
