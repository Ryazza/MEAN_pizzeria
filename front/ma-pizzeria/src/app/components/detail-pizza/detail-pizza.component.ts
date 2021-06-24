import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {environment} from "../../../environments/environment";


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

  constructor(private http: HttpClient, private route: ActivatedRoute) {
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
  changeSize(event, price) {
    this.pizzaSize = event.target.value;
  }
  addToCart() {
    
  }
}
