import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() title: String = '';
  @Input() content: String = '';
  @Input() type : 'Music' | 'Entertainment' | 'Lifestyle' | 'Mark' | 'Opinion' = 'Music';
  @Input() thumbnailPath: String = '';
  @Input() authorName: String = '';
  @Input() postedAt: Date = new Date();
  @Input() views: Number = 0;
  @Input() comments: Number = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
