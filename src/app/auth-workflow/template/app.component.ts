import { Component } from '@angular/core';
import { LocalStorageService } from './services/auth-workflow/local-storage/local-storage.service';
import { PxbAuthConfig, PxbAuthSecurityService, SecurityContext } from '@pxblue/angular-auth-workflow';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private readonly _pxbSecurityService: PxbAuthSecurityService,
        private readonly _localStorageService: LocalStorageService,
        private readonly _pxbAuthConfig: PxbAuthConfig
    ) {
        this._configurePxbAuthModule();
        this._listenForAuthStateChanges();
    }

    private _configurePxbAuthModule(): void {
        this._pxbAuthConfig.projectImage = 'assets/auth-workflow/eaton_stacked_logo.png';
        this._pxbAuthConfig.backgroundImage = 'assets/auth-workflow/background.svg';
        this._pxbAuthConfig.allowDebugMode = true;
        this._pxbSecurityService.inferOnAuthenticatedRoute('home');
    }

    // When a user transitions between being logged in / logged out, update session information.
    // This demo app stores session information in localStorage, this is just as a proof-of-concept.
    private _listenForAuthStateChanges(): void {
        this._pxbSecurityService.securityStateChanges().subscribe((state: SecurityContext) => {
            const email = state.rememberMeDetails.email;
            const rememberMe = state.rememberMeDetails.rememberMe;
            const isAuth = state.isAuthenticatedUser;
            this._localStorageService.setAuthData(rememberMe ? email : undefined, isAuth);
        });
    }
}
