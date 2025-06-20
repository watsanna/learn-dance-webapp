import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';
import { SettingComponent } from './setting/setting.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'courses', component: CoursesComponent },
  { path: 'cart', component: CartComponent },
  {path: 'setting', component: SettingComponent}



];
