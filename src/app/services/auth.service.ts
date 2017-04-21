import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {
  user: any;

  constructor(public af: AngularFire) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.user = null;
    }
  }

  login(provider: string) {
    let setProvider;
    if (provider == 'google') {
      setProvider = AuthProviders.Google;
    } else {
      setProvider = AuthProviders.Twitter;
    }

    this.af.auth
      .login({
        provider: setProvider,
        method: AuthMethods.Popup
      })
      .then(data => {
        this.user = {
          name: data.auth.displayName,
          photo: data.auth.photoURL,
          uid: data.auth.uid
        };
        localStorage.setItem('user', JSON.stringify(this.user));
      })
      .catch(e => console.log(e));
  }

  logout() {
    this.af.auth.logout()
      .then(data => {
        localStorage.removeItem('user');
        this.user = null;
      })
      .catch(e => console.log(e));
  }
}