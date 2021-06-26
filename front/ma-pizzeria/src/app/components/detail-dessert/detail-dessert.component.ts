import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {DessertService} from "../../services/dessert.service";

@Component({
  selector: 'app-detail-dessert',
  templateUrl: './detail-dessert.component.html',
  styleUrls: ['./detail-dessert.component.css']
})

export class DetailDessertComponent implements OnInit {

  oneDessert;
  id;
  url = environment.urlBack;
  price;

  constructor(private route: ActivatedRoute, private router: Router, private dessertService: DessertService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
    })
    this.getDessert();
  }
  async getDessert() {
    (await this.dessertService.getOnePizza(this.id)).subscribe(
      data => {
        // @ts-ignore
        this.oneDessert = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  addToCart(nom, price, photo) {
    const command = localStorage.getItem("dessert");
    let myCommand;
    if (!command) {
      myCommand = [];
    } else {
      myCommand = JSON.parse(command);
    }
    let dessert = {
      nom: nom,
      price: price,
      photo: photo
    };
    myCommand.push(dessert);
    localStorage.setItem("dessert", JSON.stringify(myCommand));
    this.router.navigate(['/dessert']);
  }
}
