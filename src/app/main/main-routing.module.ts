import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'user', component: UserComponent},
      { path: 'product', component: ProductComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }