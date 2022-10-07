import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { PublishingDetailsComponent } from './components/publishing-details/publishing-details.component';
import { MusicNewsComponent } from './components/music-news/music-news.component';
import { EntertainmentNewsComponent } from './components/entertainment-news/entertainment-news.component';
import { LifestyleNewsComponent } from './components/lifestyle-news/lifestyle-news.component';
import { MarksCardComponent } from './components/marks-card/marks-card.component';
import { OpinionBigCardComponent } from './components/opinion-big-card/opinion-big-card.component';
import { MusicSectionComponent } from './music-section/music-section.component';
import { EntertainmentSectionComponent } from './entertainment-section/entertainment-section.component';
import { LifestyleSectionComponent } from './lifestyle-section/lifestyle-section.component';
import { MarksSectionComponent } from './marks-section/marks-section.component';
import { OpinionSectionComponent } from './opinion-section/opinion-section.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewsSectionComponent,
    PublishingDetailsComponent,
    MusicNewsComponent,
    EntertainmentNewsComponent,
    LifestyleNewsComponent,
    MarksCardComponent,
    OpinionBigCardComponent,
    MusicSectionComponent,
    EntertainmentSectionComponent,
    LifestyleSectionComponent,
    MarksSectionComponent,
    OpinionSectionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
