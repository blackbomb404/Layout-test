import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { NewsComponent } from './components/news/news.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { MusicComponent } from './components/music/music.component';
import { MarksComponent } from './components/marks/marks.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, children: [
    { path: 'news', component: NewsComponent },
    { path: 'music', component: MusicComponent },
    { path: 'entertainment', component: EntertainmentComponent },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'marks', component: MarksComponent },
    { path: 'opinion', component: OpinionComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
