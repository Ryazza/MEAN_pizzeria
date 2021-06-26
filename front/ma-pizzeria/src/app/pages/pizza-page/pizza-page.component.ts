import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent implements OnInit {

  constructor() {
    if(!localStorage.getItem("user")) {
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
  }

}
