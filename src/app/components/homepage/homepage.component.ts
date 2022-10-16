import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  active: Boolean = false;
  searchBarValue: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.active = !this.active;
    this.searchBarValue = '';
  }

  // openSearchBar(){
  //   this.active = true;
  // }

  // closeSearchBar(){
  //   this.active = false;
  // }

}
