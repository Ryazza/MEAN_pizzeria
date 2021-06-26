import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  command;
  url = environment.urlBack;
  total = 0.0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.command = JSON.parse(localStorage.getItem("command"))
    if(this.command) {
      for (let i = 0; i < this.command.command.length; i++) {
        this.total += +this.command.command[i].price.replace(/,/g , '.');
      }
    }
  }
  deletePizza(nom, price) {

    let command = JSON.parse(localStorage.getItem('command'));
    var removeIndex = command.command.map(function(item) { return item.nom; }).indexOf(nom);
    command.command.splice(removeIndex, 1);

    localStorage.removeItem('command');
    console.log(command.command.length)
    if (command.command.length !== 0) {
      localStorage.setItem('command', JSON.stringify({"command" : command.command}))
      this.command = {"command" : command.command}
      this.total -= (+price.replace(/,/g , '.'));
    } else {
      this.command = null
      this.total = 0.0;
    }
  }

}
