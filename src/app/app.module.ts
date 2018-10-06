import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MaterialComponentsModule } from './material-components.module';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeroesComponent } from './forefront/heroes/heroes.component';
import { HeroComponent } from './forefront/hero/hero.component';
import { PostsComponent } from './forefront/posts/posts.component';
import { PostComponent } from './forefront/post/post.component';
import { SearchResultsComponent } from './forefront/search-results/search-results.component';
import { AboutComponent } from './forefront/about/about.component';

import { TruncatePipe } from './pipes/truncate.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './forefront/login/login.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    PostsComponent,
    PostComponent,
    SearchResultsComponent,
    AboutComponent,
    TruncatePipe,
    SortPipe,
    SafeHtmlPipe,
    SearchPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng6-heroes-blog'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
