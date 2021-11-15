import { Component } from '@angular/core';
import { LocalStorageService } from './services/auth-workflow/local-storage/local-storage.service';
import { BluiAuthConfig, BluiAuthSecurityService, SecurityContext } from '@brightlayer-ui/angular-auth-workflow';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(
        private readonly _bluiSecurityService: BluiAuthSecurityService,
        private readonly _localStorageService: LocalStorageService,
        private readonly _bluiAuthConfig: BluiAuthConfig
    ) {
        this._configureBluiAuthModule();
        this._listenForAuthStateChanges();
    }

    private _configureBluiAuthModule(): void {
        this._bluiAuthConfig.projectImage = 'assets/auth-workflow/eaton_stacked_logo.png';
        this._bluiAuthConfig.backgroundImage = 'assets/auth-workflow/background.svg';
        this._bluiAuthConfig.allowDebugMode = true;
        this._bluiSecurityService.inferOnAuthenticatedRoute('home');
    }

    // When a user transitions between being logged in / logged out, update session information.
    // This demo app stores session information in localStorage, this is just as a proof-of-concept.
    private _listenForAuthStateChanges(): void {
        this._bluiSecurityService.securityStateChanges().subscribe((state: SecurityContext) => {
            const email = state.rememberMeDetails.email;
            const rememberMe = state.rememberMeDetails.rememberMe;
            const isAuth = state.isAuthenticatedUser;
            this._localStorageService.setAuthData(rememberMe ? email : undefined, isAuth);
        });
    }
}
