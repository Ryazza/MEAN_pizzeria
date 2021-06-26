import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaPageComponent } from "./pages/pizza-page/pizza-page.component";
import { DetailPizzaPageComponent } from "./pages/detail-pizza-page/detail-pizza-page.component";
import { BoissonPageComponent } from "./pages/boisson-page/boisson-page.component";
import { DessertPageComponent } from "./pages/dessert-page/dessert-page.component";
import {DetailDessertPageComponent} from "./pages/detail-dessert-page/detail-dessert-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'pizza', component: PizzaPageComponent},
  { path: 'boisson', component: BoissonPageComponent},
  { path: 'dessert', component: DessertPageComponent},
  { path: 'dessert/:id', component: DetailDessertPageComponent},
  { path: 'pizza/:id', component: DetailPizzaPageComponent},
  { path: '**' , component: PizzaPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
