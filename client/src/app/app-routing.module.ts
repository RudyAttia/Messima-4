import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {path:'all', component:AllComponent},
    {path:'add', component:AddComponent},
    {path:'', redirectTo:'all', pathMatch:"full"},
    {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
