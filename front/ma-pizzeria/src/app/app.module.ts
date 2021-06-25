import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { PanierComponent } from './components/panier/panier.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { DetailPizzaComponent } from './components/detail-pizza/detail-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MainPageComponent,
    PizzaCardComponent,
    PanierComponent,
    DetailPageComponent,
    DetailPizzaComponent,
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
