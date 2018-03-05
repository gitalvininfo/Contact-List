import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDfZ5VXbNdFJWJ3bSwEsXl8C7fQnwiuuHo",
    authDomain: "contactlist-f2eda.firebaseapp.com",
    databaseURL: "https://contactlist-f2eda.firebaseio.com",
    projectId: "contactlist-f2eda",
    storageBucket: "contactlist-f2eda.appspot.com",
    messagingSenderId: "930502756709"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
