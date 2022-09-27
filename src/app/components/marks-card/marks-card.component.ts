import { Component, Input, OnInit } from '@angular/core';
import { IPublishingDetails } from 'src/app/models/IPublishingDetails';

@Component({
  selector: 'app-marks-card',
  templateUrl: './marks-card.component.html',
  styleUrls: ['./marks-card.component.scss']
})
export class MarksCardComponent implements OnInit {
  @Input() type: 'mark' | 'opinion' = 'mark';
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
