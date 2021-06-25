import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  command;
  url = environment.urlBack;
  total = 0.0;

  constructor() { }

  ngOnInit(): void {
    this.command = JSON.parse(localStorage.getItem("command"))
    for (let i = 0; i < this.command.command.length; i++) {
      this.total += +this.command.command[i].price.replace(/,/g , '.');
    }
  }

}
