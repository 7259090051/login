import { Injectable }       from '@angular/core';
import { Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if(localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }

  }
}