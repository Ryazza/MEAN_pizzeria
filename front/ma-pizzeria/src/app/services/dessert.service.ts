import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  api = environment.urlBack;
  baseUrl = "/dessert/";

  constructor(private http: HttpClient) { }

  async getAllDessert() {
    return this.http.get(this.api + this.baseUrl);
  }
  async getOnePizza(id) {
    return this.http.get(this.api + this.baseUrl + id);
  }

}
