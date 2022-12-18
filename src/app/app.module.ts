import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SaladsComponent } from './components/salads/salads.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { FamousComponent } from './components/famous/famous.component';
import { RateDialog } from './dialogs/rate-dialog.component';
import { OffersComponent } from './components/offers/offers.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserGuardService } from './services/guard/user-guard.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    DeliveryComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    RateDialog,
    SaladsComponent,
    AboutUsComponent,
    DessertsComponent,
    FamousComponent,
    OffersComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [UserGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
