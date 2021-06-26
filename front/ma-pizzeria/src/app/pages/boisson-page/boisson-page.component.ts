import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boisson-page',
  templateUrl: './boisson-page.component.html',
  styleUrls: ['./boisson-page.component.css']
})
export class BoissonPageComponent implements OnInit {

  constructor() {
    if(!localStorage.getItem("user")) {
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
  }

}
