import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from "../../../environments/environment";
import {PizzaService} from "../../services/pizza.service";

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.component.html',
  styleUrls: ['./detail-pizza.component.css']
})

export class DetailPizzaComponent implements OnInit {

  onePizza;
  id;
  pizzaSize = "Medium";
  url = environment.urlBack;
  price;

  constructor( private route: ActivatedRoute, private router: Router, private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
    })
    this.getPizza()
  }

  async getPizza() {
    (await this.pizzaService.getOnePizza(this.id)).subscribe(
      data => {
        // @ts-ignore
        this.onePizza = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  changeSize(event) {
    this.pizzaSize = event.target.value;
  }

  addToCart() {
    const command = localStorage.getItem("pizza");
    let myCommand;
    if (!command) {
      myCommand = [];
    } else {
      myCommand = JSON.parse(command);
    }
    let pizza = {};
    switch (this.pizzaSize) {
      case 'Medium':
        pizza = {
          nom: this.onePizza.nom,
          size: this.pizzaSize,
          price: this.onePizza.prices[0].Medium,
          photo: this.onePizza.photo,
          nbr: 1
        };
        myCommand.push(pizza);
        localStorage.setItem("pizza", JSON.stringify(myCommand));
        this.router.navigate(['/pizza']);
        break;
      case 'Large' :
        pizza = {
          nom: this.onePizza.nom,
          size: this.pizzaSize,
          price: this.onePizza.prices[1].Large,
          photo: this.onePizza.photo,
          nbr: 1
        };
        myCommand.push(pizza);
        localStorage.setItem("pizza", JSON.stringify(myCommand));
        this.router.navigate(['/pizza']);
        break;
      case 'XL' :
        pizza = {
          nom: this.onePizza.nom,
          size: this.pizzaSize,
          price: this.onePizza.prices[2].XL,
          photo: this.onePizza.photo,
          nbr: 1
        };
        myCommand.push(pizza);
        localStorage.setItem("pizza", JSON.stringify(myCommand));
        this.router.navigate(['/pizza']);
        break;
    }
  }
}
