import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
export const firebaseConfig = {
  apiKey: "AIzaSyBGVFZtAT0z2654tuMT4u6PTFq_hfegTpg",
  authDomain: "ionictestapp-250da.firebaseapp.com",
  databaseURL: "https://ionictestapp-250da.firebaseio.com",
  projectId: "ionictestapp-250da",
  storageBucket: "ionictestapp-250da.appspot.com",
  messagingSenderId: "1049781807363"
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
}

