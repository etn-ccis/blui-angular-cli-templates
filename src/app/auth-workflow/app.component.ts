import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PxbAuthSecurityService, SecurityContext } from '@pxblue/angular-auth-workflow';
import { LocalStorageService } from './services/auth-workflow/localStorage.service';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
    stateListener: Subscription;

    constructor(
        private readonly _pxbSecurityService: PxbAuthSecurityService,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _localStorageService: LocalStorageService
    ) {
        this._listenForAuthLoadingStateChanges();
    }

    // This will listen for auth state loading changes and toggles the shared overlay loading screen.
    private _listenForAuthLoadingStateChanges(): void {
        this.stateListener = this._pxbSecurityService.securityStateChanges().subscribe((state: SecurityContext) => {
            const email = state.rememberMeDetails.email;
            const rememberMe = state.rememberMeDetails.rememberMe;
            const isAuth = state.isAuthenticatedUser;
            this._localStorageService.setAuthData(rememberMe ? email : undefined, isAuth);
            this._changeDetectorRef.detectChanges();
        });
    }
}
