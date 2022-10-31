import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishing-details',
  templateUrl: './publishing-details.component.html',
  styleUrls: ['./publishing-details.component.scss']
})
export class PublishingDetailsComponent implements OnInit {
  @Input() authorName: String = '';
  @Input() postedAt: Date = new Date();
  @Input() views?: Number;
  @Input() comments?: Number;
  @Input() textColor: 'light' | 'dark' = 'dark';

  constructor() {
  }

  ngOnInit(): void {
  }

}
