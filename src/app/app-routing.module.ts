import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LuxurypageComponent } from './luxurypage/luxurypage.component';
import { SedanpageComponent } from './sedanpage/sedanpage.component';
import { SuvpageComponent } from './suvpage/suvpage.component';

const routes: Routes = [
  {
    path:'', component: HomepageComponent
  },
  {
    path:'sedan', component: SedanpageComponent
  },
  {
    path:'suv', component: SuvpageComponent
  },
  {
    path:'luxury', component: LuxurypageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

