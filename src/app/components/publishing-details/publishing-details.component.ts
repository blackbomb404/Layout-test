import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishing-details',
  templateUrl: './publishing-details.component.html',
  styleUrls: ['./publishing-details.component.scss']
})
export class PublishingDetailsComponent implements OnInit {
  @Input() authorName: String = '';
  @Input() since?: String = '';
  @Input() textColor: 'light' | 'dark' = 'dark';
  @Input() views?: Number = 0;;
  @Input() comments?: Number = 0;

  @Input() showViewsAndComments: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
