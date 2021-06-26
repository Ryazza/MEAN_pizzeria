import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {BoissonService} from '../../services/boisson.service';

@Component({
  selector: 'app-boisson-card',
  templateUrl: './boisson-card.component.html',
  styleUrls: ['./boisson-card.component.css']
})
export class BoissonCardComponent implements OnInit {

  boissons;
  api = environment.urlBack;

  constructor(private boissonService: BoissonService) { }

  ngOnInit(): void {
    this.getAllBoisson();
  }

  async getAllBoisson() {
    (await this.boissonService.getAllBoisson()).subscribe({
      next: data => {
        if (data) {
          this.boissons = data;
        }
      }
    })
  }

  addToCart(nom, price, photo, quantity) {
    const command = localStorage.getItem("boisson");
    let myCommand;
    if (!command) {
      myCommand = [];
    } else {
      myCommand = JSON.parse(command);
    }
    let boisson = {
      nom: nom,
      price: price,
      photo: photo,
      quantity: quantity
    };
    myCommand.push(boisson);
    localStorage.setItem("boisson", JSON.stringify(myCommand));
    window.location.reload();
  }

}
