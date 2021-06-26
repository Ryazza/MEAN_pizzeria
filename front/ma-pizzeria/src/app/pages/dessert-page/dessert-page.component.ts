import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert-page',
  templateUrl: './dessert-page.component.html',
  styleUrls: ['./dessert-page.component.css']
})
export class DessertPageComponent implements OnInit {

  constructor() {
    if(!localStorage.getItem("user")) {
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
  }

}
