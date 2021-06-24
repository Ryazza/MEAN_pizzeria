import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  pizzas;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get('http://localhost:4242/pizza').subscribe(
      data => {
        // @ts-ignore
        this.pizzas = data;
        console.log(data);
      },
      error => {
        // console.log(error)
      }
    )
  }

}
