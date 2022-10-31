import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { INewsCard } from '../models/INewsCard';
import { ISideNews } from '../models/ISideNews';
import { ITopNews } from '../models/ITopNews';

@Injectable({
  providedIn: 'root'
})
export class RadarApiService {

  constructor(private http: HttpClient) {}

  public fetchTopCarousel(url: string) {
    return this.http.get<INewsCard[]>(url, { responseType: 'json' });
  }

  public fetchSideNews(url: string) {
    return this.http.get<ISideNews[]>(url, { responseType: 'json' });
  }

  public fetchTopNews(url: string){
    return this.http.get<ITopNews[]>(url, { responseType: 'json' });
  }

  public fetchMusicNews(url: string){
    return this.http.get<INewsCard[]>(url, { responseType: 'json'});
  }

  public fetchEntertainmentNews(url: string) {
    return this.http.get<INewsCard[]>(url, { responseType: 'json' });
  }

  public fetchLifestyleNews(url: string){
    return this.http.get<INewsCard[]>(url, { responseType: 'json' });
  }

  public fetchMarkNews(url: string) {
    return this.http.get<INewsCard[]>(url, { responseType: 'json' });
  }

  public fetchOpinionNews(url: string){
    return this.http.get<ITopNews[]>(url, { responseType: 'json' });
  }
}
