import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router"

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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
    })

    this.http.get(this.url + 'pizza/' + this.id).subscribe(
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
    const command = localStorage.getItem("command");
    let myCommand;
    if (!command) {
      myCommand = {command: []};
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
        myCommand.command.push(pizza);
        localStorage.setItem("command", JSON.stringify(myCommand));
        this.router.navigate(['']);
        break;
      case 'Large' :
        pizza = {
          nom: this.onePizza.nom,
          size: this.pizzaSize,
          price: this.onePizza.prices[1].Large,
          photo: this.onePizza.photo,
          nbr: 1
        };
        myCommand.command.push(pizza);
        localStorage.setItem("command", JSON.stringify(myCommand));
        this.router.navigate(['']);
        break;
      case 'XL' :
        pizza = {
          nom: this.onePizza.nom,
          size: this.pizzaSize,
          price: this.onePizza.prices[2].XL,
          photo: this.onePizza.photo,
          nbr: 1
        };
        myCommand.command.push(pizza);
        localStorage.setItem("command", JSON.stringify(myCommand));
        this.router.navigate(['']);
        break;
    }
  }
}
