import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { FunctionComponent } from './main/function/function.component';
import { ProductComponent } from './main/product/product.component';
import { RoleComponent } from './main/role/role.component';
import { UserComponent } from './main/user/user.component';
import { ProductCategogyComponent } from './main/product-categogy/product-categogy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    FunctionComponent,
    ProductComponent,
    RoleComponent,
    UserComponent,
    ProductCategogyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
