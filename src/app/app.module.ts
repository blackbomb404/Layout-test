import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { PublishingDetailsComponent } from './components/publishing-details/publishing-details.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MusicSectionComponent } from './music-section/music-section.component';
import { EntertainmentSectionComponent } from './entertainment-section/entertainment-section.component';
import { LifestyleSectionComponent } from './lifestyle-section/lifestyle-section.component';
import { MarksSectionComponent } from './marks-section/marks-section.component';
import { OpinionSectionComponent } from './opinion-section/opinion-section.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { TopCarouselComponent } from './components/top-carousel/top-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { DaysFromNowPipe } from './pipes/days-from-now.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewsSectionComponent,
    PublishingDetailsComponent,
    NewsCardComponent,
    MusicSectionComponent,
    EntertainmentSectionComponent,
    LifestyleSectionComponent,
    MarksSectionComponent,
    OpinionSectionComponent,
    CarouselComponent,
    TopCarouselComponent,
    DaysFromNowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
