import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishing-details',
  templateUrl: './publishing-details.component.html',
  styleUrls: ['./publishing-details.component.scss']
})
export class PublishingDetailsComponent implements OnInit {
  @Input() type: 'music' | 'entertainment' | 'lifestyle'  = 'music';
  @Input() authorPhotoPath: String = '';
  @Input() authorName: String = '';
  @Input() since: String = '';
  @Input() viewsIconPath: String = '';
  @Input() views: Number = 0;
  @Input() commentsIconPath: String = '';
  @Input() comments: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
