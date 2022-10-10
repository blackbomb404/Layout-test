import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  active: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // openSearchBar(){
  //   this.active = true;
  // }

  // closeSearchBar(){
  //   this.active = false;
  // }

}
