import { Component, Input, OnInit } from '@angular/core';
import { IPublishingDetails } from 'src/app/models/IPublishingDetails';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() type : 'music' | 'entertainment' | 'lifestyle' | 'marks' | 'opinion' = 'music';
  @Input() thumbnailPath: String = '';
  @Input() title: String = '';
  @Input() publishingDetails: IPublishingDetails = {
    authorPhotoPath: '',
    authorName: '',
    since: '',
    views: 0,
    comments: 0
  };
  @Input() contentBody: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
