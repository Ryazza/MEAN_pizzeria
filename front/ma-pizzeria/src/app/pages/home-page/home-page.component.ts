import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    let adress = (<HTMLInputElement>document.getElementById('Adresse')).value;
    let phone = (<HTMLInputElement>document.getElementById('phone')).value;
    console.log(adress)
    console.log(phone)
    //todo vérification sur les input
    if(adress.trim() !== "" && phone.trim() !== "") {
      localStorage.removeItem("pizza")
      localStorage.removeItem("boisson")
      localStorage.removeItem("dessert")
      let user = [{adress: adress, phone: phone}]
      localStorage.setItem("user", JSON.stringify(user))
      window.location.href = "/pizza";
    } else {
      document.location.reload();
    }
  }
}
