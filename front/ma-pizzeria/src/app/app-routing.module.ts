import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { DetailPageComponent } from "./pages/detail-page/detail-page.component";
import {BoissonPageComponent} from "./pages/boisson-page/boisson-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'boisson', component: BoissonPageComponent},
  { path: 'pizza/:id', component: DetailPageComponent},
  { path: '**' , component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
