// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { OwnerHomeComponent } from './components/owner-home/owner-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
 // { path: 'owner-home', component: OwnerHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add other routes here...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
