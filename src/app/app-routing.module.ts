import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { AdduserComponent } from './adduser/adduser.component';

export const routes: Routes = [
  { path:'card', component: GridComponent},
  { path:'list', component: ListComponent},
  { path:'add', component: AdduserComponent},
  { path:'**', redirectTo:"/", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ GridComponent,ListComponent,AdduserComponent ];
