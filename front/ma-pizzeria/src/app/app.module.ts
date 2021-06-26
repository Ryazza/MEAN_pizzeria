import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { PanierComponent } from './components/panier/panier.component';
import { DetailPizzaPageComponent } from './pages/detail-pizza-page/detail-pizza-page.component';
import { DetailPizzaComponent } from './components/detail-pizza/detail-pizza.component';
import { BoissonPageComponent } from './pages/boisson-page/boisson-page.component';
import { BoissonCardComponent } from './components/boisson-card/boisson-card.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { DessertCardComponent } from './components/dessert-card/dessert-card.component';
import { DetailDessertPageComponent } from './pages/detail-dessert-page/detail-dessert-page.component';
import { DetailDessertComponent } from './components/detail-dessert/detail-dessert.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzaPageComponent,
    PizzaCardComponent,
    PanierComponent,
    DetailPizzaPageComponent,
    DetailPizzaComponent,
    BoissonPageComponent,
    BoissonCardComponent,
    DessertPageComponent,
    DessertCardComponent,
    DetailDessertPageComponent,
    DetailDessertComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
