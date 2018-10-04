import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MaterialComponentsModule } from './material-components.module';
import { AppRoutingModule } from './app-routing.module';

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
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
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
