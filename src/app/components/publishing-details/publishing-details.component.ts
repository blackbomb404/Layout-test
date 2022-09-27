import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishing-details',
  templateUrl: './publishing-details.component.html',
  styleUrls: ['./publishing-details.component.scss']
})
export class PublishingDetailsComponent implements OnInit {
  @Input() type: 'music' | 'entertainment' | 'lifestyle' | 'marks' | 'opinion' | 'none' = 'none';
  @Input() authorPhotoPath: String = '';
  @Input() authorName: String = '';
  @Input() since?: String = '';
  @Input() sinceTextColor: 'light' | 'dark' = 'dark';
  @Input() viewsIconPath?: String = '';
  @Input() views?: Number = 0;
  @Input() commentsIconPath?: String = '';
  @Input() comments?: Number = 0;
  @Input() postDate?: String = '';

  @Input() showViewsAndComments: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
