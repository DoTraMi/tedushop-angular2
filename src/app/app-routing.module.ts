import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { UserComponent } from './main/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent, children: [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
