import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { FamousComponent } from './components/famous/famous.component';
import { OffersComponent } from './components/offers/offers.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MenuComponent } from './components/menu/menu.component';
import { SaladsComponent } from './components/salads/salads.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserGuardService } from './services/guard/user-guard.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: 'login', component : LoginComponent },
  { path: 'logout', component : LogoutComponent },
  { path: 'dashboard', component : DashboardComponent, canActivate: [UserGuardService] },
  { path: 'register', component : RegisterComponent },
  { path: 'verify-email', component : VerifyEmailComponent },
  { path: 'forgot-password', component : ForgotPasswordComponent },
  { path: "famous-pizza", component: FamousComponent },
  { path: "offers", component: OffersComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "delivery", component: DeliveryComponent },
  { path: "reservation", component: ReservationComponent },
  { path: "menu", component: MenuComponent },
  { path: "salads", component: SaladsComponent },
  { path: "desserts", component: DessertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
