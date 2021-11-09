import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './book/book.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// chat window
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { ChatComponent } from './chat/chat.component';

// service worker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// hosting - doesn't work
import * as firebase from 'firebase';

// date picker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';
import { calendarComponent } from './calendar/calendar.component';

//
import { APP_BASE_HREF } from '@angular/common';

const Routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'book', component: BookComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    ChatModule,
    environment.production
      ? ServiceWorkerModule.register('/ngsw-worker.js')
      : [],
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    BlogComponent,
    BookComponent,
    MainComponent,
    ChatComponent,
    calendarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {
  /*
  constructor(){         
    firebase.initializeApp(environment.firebaseConfig);
  }
  */
}
