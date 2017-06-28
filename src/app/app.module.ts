import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomeSpan } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DashBoardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    HomeSpan,
    LoginPage,
    DashBoardPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HomeSpan),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomeSpan,
    LoginPage,
    DashBoardPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
