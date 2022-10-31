import { Component, OnInit } from '@angular/core';
import { INewsCard } from 'src/app/models/INewsCard';
import { ISideNews } from 'src/app/models/ISideNews';
import { ITopNews } from 'src/app/models/ITopNews';
import { RadarApiService } from 'src/app/services/radar-api.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
  topCarousel: INewsCard[] = [];
  sideNews: ISideNews[] = [];
  topNews: ITopNews[] = [];
  musicNews: INewsCard[] = [];
  entertainmentNews: INewsCard[] = [];
  lifestyleNews: INewsCard[] = [];
  marks: INewsCard[] =[];
  opinions: ITopNews[] = [];

  constructor(private api: RadarApiService) { }

  ngOnInit(): void {
    this.api.fetchTopCarousel('https://localhost:7074/api/news/topcarousel')
    .subscribe({
      next: (data: INewsCard[]) => {

        this.topCarousel = data;
        console.log(data);
      }
    })

    this.api.fetchSideNews('https://localhost:7074/api/sidenews')
    .subscribe({
      next: (data: ISideNews[]) => {

        this.sideNews = data;
      }
    })

    this.api.fetchTopNews('https://localhost:7074/api/news/topnews')
    .subscribe({
      next: (data: ITopNews[]) => {

        this.topNews = data;
      },
      error: errorHandler
    })

    this.api.fetchMusicNews('https://localhost:7074/api/news/music')
    .subscribe({
      next: (data: INewsCard[]) => {

        this.musicNews = data;
      },
      error: errorHandler
    });

    this.api.fetchEntertainmentNews('https://localhost:7074/api/news/entertainment')
    .subscribe({
      next: (data: INewsCard[]) => {

        this.entertainmentNews = data;
      },
      error: errorHandler
    });

    this.api.fetchLifestyleNews('https://localhost:7074/api/news/lifestyle')
    .subscribe({
      next: (data: INewsCard[]) => {

        this.lifestyleNews = data;
      },
      error: errorHandler
    });

    this.api.fetchMarkNews('https://localhost:7074/api/news/mark')
    .subscribe({
      next: (data: INewsCard[]) => {

        this.marks = data;
      },
      error: errorHandler
    });

    this.api.fetchOpinionNews('https://localhost:7074/api/news/opinion')
    .subscribe({
      next: (data: ITopNews[]) => {

        this.opinions = data;
      },
      error: errorHandler
    })


    function errorHandler(err: any){
      console.error('Something went wrong...\n' + err);
    }
  }



}
