import { Component } from '@angular/core';

import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(public auth: AuthService) { }

  login(provider: string): void {
    this.auth.login(provider);
  }
}
