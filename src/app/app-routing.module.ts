import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { EntertainmentSectionComponent } from './entertainment-section/entertainment-section.component';
import { LifestyleSectionComponent } from './lifestyle-section/lifestyle-section.component';
import { MarksSectionComponent } from './marks-section/marks-section.component';
import { MusicSectionComponent } from './music-section/music-section.component';
import { OpinionSectionComponent } from './opinion-section/opinion-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: '', component: HomepageComponent, children: [
    { path: 'news', component: NewsSectionComponent },
    { path: 'music', component: MusicSectionComponent },
    { path: 'entertainment', component: EntertainmentSectionComponent },
    { path: 'lifestyle', component: LifestyleSectionComponent },
    { path: 'marks', component: MarksSectionComponent },
    { path: 'opinion', component: OpinionSectionComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
