import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'Products',component: ProductListComponent },
  {path: '', component: ProductsComponent},
  {path:'Home', component: ProductsComponent},
  {path:'Users',component:UsersComponent},
  {path:'Posts', component:PostsComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
