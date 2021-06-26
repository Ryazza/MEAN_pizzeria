import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  pizza;
  boisson;
  dessert;
  url = environment.urlBack;
  totalPizza = 0.0;
  totalBoisson = 0.0;
  totalDessert = 0.0;
  total = 0.0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pizza = JSON.parse(localStorage.getItem("pizza"))
    if(this.pizza) {
      for (let i = 0; i < this.pizza.length; i++) {
        this.totalPizza += +this.pizza[i].price.replace(/,/g , '.');
      }
    }
    this.boisson = JSON.parse(localStorage.getItem("boisson"))
    if(this.boisson) {
      for (let i = 0; i < this.boisson.length; i++) {
        this.totalBoisson += +this.boisson[i].price;
      }
    }
    this.dessert = JSON.parse(localStorage.getItem("dessert"))
    if(this.dessert) {
      for (let i = 0; i < this.dessert.length; i++) {
        this.totalDessert += +this.dessert[i].price;
      }
    }
    this.total = this.totalBoisson + this.totalPizza + this.totalDessert
  }

  deletePizza(nom, price) {
    let pizzaCommand = JSON.parse(localStorage.getItem('pizza'));
    const removeIndex = pizzaCommand.map(function (item) {
      return item.nom;
    }).indexOf(nom);
    pizzaCommand.splice(removeIndex, 1);

    localStorage.removeItem('pizza');
    console.log(pizzaCommand.length)
    if (pizzaCommand.length !== 0) {
      localStorage.setItem('pizza', JSON.stringify(pizzaCommand))
      this.pizza = pizzaCommand
      this.totalPizza -= (+price.replace(/,/g , '.'));
      this.total = this.totalPizza + this.totalBoisson + this.totalDessert;
    } else {
      this.pizza = null
      this.totalPizza = 0.0;
      this.total = this.totalBoisson + this.totalDessert;
    }
  }

  deleteBoisson(nom, price) {
    let boissonCommand = JSON.parse(localStorage.getItem('boisson'));

    const removeIndex = boissonCommand.map(function (item) {
      return item.nom;
    }).indexOf(nom);

    boissonCommand.splice(removeIndex, 1);

    localStorage.removeItem('boisson');
    if (boissonCommand.length !== 0) {
      localStorage.setItem('boisson', JSON.stringify(boissonCommand))
      this.boisson = boissonCommand
      this.totalBoisson -= price;
      this.total = this.totalPizza + this.totalBoisson + this.totalDessert;
    } else {
      this.boisson = null
      this.totalBoisson = 0.0;
      this.total = this.totalPizza + this.totalDessert;
    }
  }

  deleteDessert(nom, price) {
    console.log(this.total)

    let dessertCommand = JSON.parse(localStorage.getItem('dessert'));
    const removeIndex = dessertCommand.map(function (item) {
      return item.nom;
    }).indexOf(nom);

    dessertCommand.splice(removeIndex, 1);

    localStorage.removeItem('dessert');
    if (dessertCommand.length !== 0) {
      localStorage.setItem('dessert', JSON.stringify(dessertCommand))
      this.dessert = dessertCommand
      this.totalDessert -= price;
      this.total = this.totalPizza + this.totalBoisson + this.totalDessert;
    } else {
      console.log('test')
      this.dessert = null
      this.totalDessert = 0.0;
      this.total = this.totalPizza + this.totalBoisson;
    }
  }

}
