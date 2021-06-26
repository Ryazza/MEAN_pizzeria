import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-pizza-page.component.html',
  styleUrls: ['./detail-pizza-page.component.css']
})
export class DetailPizzaPageComponent implements OnInit {

  constructor() {
    if(!localStorage.getItem("user")) {
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
  }

}
