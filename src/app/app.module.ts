import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsComponent } from './components/news/news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { MusicComponent } from './components/music/music.component';
import { MarksComponent } from './components/marks/marks.component';
import { PublishingDetailsComponent } from './components/publishing-details/publishing-details.component';
import { MusicNewsComponent } from './components/music-news/music-news.component';
import { EntertainmentNewsComponent } from './components/entertainment-news/entertainment-news.component';
import { LifestyleNewsComponent } from './components/lifestyle-news/lifestyle-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewsComponent,
    EntertainmentComponent,
    LifestyleComponent,
    OpinionComponent,
    MusicComponent,
    MarksComponent,
    PublishingDetailsComponent,
    MusicNewsComponent,
    EntertainmentNewsComponent,
    LifestyleNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
