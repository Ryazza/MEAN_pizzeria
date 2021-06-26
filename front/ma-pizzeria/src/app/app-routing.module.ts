import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/pizza-page/main-page.component";
import { DetailPizzaPageComponent } from "./pages/detail-pizza-page/detail-pizza-page.component";
import { BoissonPageComponent } from "./pages/boisson-page/boisson-page.component";
import { DessertPageComponent } from "./pages/dessert-page/dessert-page.component";
import {DetailDessertPageComponent} from "./pages/detail-dessert-page/detail-dessert-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'boisson', component: BoissonPageComponent},
  { path: 'dessert', component: DessertPageComponent},
  { path: 'dessert/:id', component: DetailDessertPageComponent},
  { path: 'pizza/:id', component: DetailPizzaPageComponent},
  { path: '**' , component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
