import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ProfilPage} from '../pages/profil/profil';
import { MapPage } from '../pages/map/map';
import {SettingPage} from '../pages/setting/setting';
import {LoginPage} from '../pages/login/login';
import {CoffePage} from '../pages/coffe/coffe';
import {AjoutPage} from '../pages/ajoutoffre/ajout'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { OffersProvider } from '../providers/offers/offers';
import { CommentsProvider } from '../providers/comments/comments';
import {CommentPage} from '../pages/comments/comment';
import { ProfileProvider } from '../providers/profile/profile';
import { ListcoffeeProvider } from '../providers/listcoffee/listcoffee';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilPage,
    MapPage,
    SettingPage,
    LoginPage,
    CoffePage,
    AjoutPage,
    CommentPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilPage,
    MapPage,
    SettingPage,
    LoginPage,
    CoffePage,
    AjoutPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Geolocation,
    OffersProvider,
    CommentsProvider,
    ProfileProvider,
    ListcoffeeProvider,

  ]
})
export class AppModule {}
