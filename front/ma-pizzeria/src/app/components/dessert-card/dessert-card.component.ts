import { Component, OnInit } from '@angular/core';
import { DessertService } from '../../services/dessert.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.css']
})

export class DessertCardComponent implements OnInit {

  desserts;
  api = environment.urlBack;

  constructor(private dessertService: DessertService) { }

  ngOnInit() {
    this.getAllDessert();
  }

  async getAllDessert() {
    (await this.dessertService.getAllDessert()).subscribe({
      next: data => {
        if (data) {
          // @ts-ignore
          this.desserts = data;
        }
      }
    })
  }

}
