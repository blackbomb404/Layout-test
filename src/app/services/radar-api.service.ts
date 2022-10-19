import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IMusicNews } from '../models/IMusicNews';

@Injectable({
  providedIn: 'root'
})
export class RadarApiService {

  constructor(private http: HttpClient) {}

  public fetchMusicNews(url: string){
    return this.http.get<IMusicNews[]>(url, { responseType: 'json'});
  }
}
