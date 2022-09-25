import { Component, Input, OnInit } from '@angular/core';
import { IPublishingDetails } from 'src/app/models/IPublishingDetails';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.scss']
})
export class EntertainmentNewsComponent implements OnInit {
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
