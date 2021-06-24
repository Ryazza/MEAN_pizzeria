import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  pizzas;
  api = "http://localhost:4242/";
  displayPizza = false;
  onePizza;
  pizzaSize = "Medium";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get(this.api +'pizza').subscribe(
      data => {
        // @ts-ignore
        this.pizzas = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }
  thisPizza(id) {
    this.http.get(this.api +'pizza/' + id).subscribe(
      data => {
        // @ts-ignore
        this.onePizza = data;
        this.displayPizza = true
      },
      error => {
        console.log(error)
      }
    )
  }
  changeSize(event) {
    this.pizzaSize = event.target.value;
  }
}
