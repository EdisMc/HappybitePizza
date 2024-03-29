import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn : boolean = false;

  constructor(public fireauth: AngularFireAuth, public router: Router) {
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('token', 'true');

      if (res.user?.emailVerified == true) {
        this.loggedIn = true;
        this.router.navigate(['/dashboard']);
        return true;
      } else {
        this.router.navigate(['/verify-email']);
        return false;
      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful!');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.loggedIn = false;
      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
    })
  }

  isAuthenticated() {
    return this.loggedIn;
  }

  aboutUs() {
    this.loggedIn = false;
  }

  menu() {
    this.loggedIn = true;
  }

  delivery() {
    this.loggedIn = true;
  }

  reservation() {
    this.loggedIn = false;
  }


  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong!');
    })
  }

  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verify-email']);
    }, (err: any) => {
      alert('Something went wrong...')
    })
  }

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

}