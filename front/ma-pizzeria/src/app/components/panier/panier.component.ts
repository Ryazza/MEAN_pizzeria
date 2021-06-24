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
  constructor() { }

  ngOnInit(): void {
    this.command = JSON.parse(localStorage.getItem("command"))
  }

}
