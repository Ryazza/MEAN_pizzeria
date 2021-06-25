import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})

export class PizzaCardComponent implements OnInit {

  pizzas;
  api = environment.urlBack;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.getPizzas();
  }

  async getPizzas() {
    (await this.pizzaService.getAllPizza()).subscribe({
      next: data => {
        if (data) {
          // @ts-ignore
          this.pizzas = data;
        }
      }
    })
  }

}
