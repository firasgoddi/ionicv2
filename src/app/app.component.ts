import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ProfilPage} from '../pages/profil/profil';
import { MapPage } from '../pages/map/map';
import {SettingPage} from '../pages/setting/setting';
import {LoginPage} from '../pages/login/login';
import {CoffePage} from '../pages/coffe/coffe';
import { AjoutPage } from '../pages/ajoutoffre/ajout';
import { AuthProvider } from '../providers/auth/auth';
import {CommentPage} from '../pages/comments/comment';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // ngfor
    this.pages  = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'List', component: ListPage,icon:'list'},
      { title: 'Profil', component: ProfilPage, icon:'man' },
      { title: 'Map', component: MapPage, icon:'map' },

  

    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
