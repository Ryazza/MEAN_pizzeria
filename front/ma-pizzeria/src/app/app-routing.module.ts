import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { DetailPageComponent } from "./pages/detail-page/detail-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: '/pizza/:id', component: DetailPageComponent},
  { path: '**' , component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
