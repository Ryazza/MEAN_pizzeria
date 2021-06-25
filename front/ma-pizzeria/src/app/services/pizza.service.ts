import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  api = environment.urlBack;
  baseUrl = "/pizza/";

  constructor(private http: HttpClient) { }

  async getAllPizza(){
    return this.http.get(this.api + this.baseUrl);
  }
  async getOnePizza(id){
    return this.http.get(this.api + this.baseUrl + id)
  }
}
