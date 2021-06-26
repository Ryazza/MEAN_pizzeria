import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  api = environment.urlBack;
  baseUrl = "/boisson/";

  constructor(private http: HttpClient) { }

  async getAllBoisson(){
    return this.http.get(this.api + this.baseUrl);
  }

}
