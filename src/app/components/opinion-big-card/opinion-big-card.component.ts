import { Component, Input, OnInit } from '@angular/core';
import { IPublishingDetails } from 'src/app/models/IPublishingDetails';

@Component({
  selector: 'app-opinion-big-card',
  templateUrl: './opinion-big-card.component.html',
  styleUrls: ['./opinion-big-card.component.scss']
})
export class OpinionBigCardComponent implements OnInit {
  @Input() thumbnailPath: String = '';
  @Input() title: String = '';
  @Input() publishingDetails: IPublishingDetails = {
      authorPhotoPath: '',
      authorName: '',
      since: '',
      postDate: ''
  };
  @Input() contentBody: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
