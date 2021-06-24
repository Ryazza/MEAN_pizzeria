import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { PizzaPageComponent } from "./pages/pizza-page/pizza-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: ':id', component: PizzaPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
