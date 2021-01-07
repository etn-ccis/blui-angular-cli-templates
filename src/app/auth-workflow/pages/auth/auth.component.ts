import { Component } from '@angular/core';
import { PxbAuthConfig, AUTH_ROUTES } from '@pxblue/angular-auth-workflow';

@Component({
    selector: 'app-auth',
    template: `
        <pxb-auth [loginRef]="loginPage">
            <ng-template #loginPage>
                <pxb-login>
                    <div pxb-login-header>
                        <img
                            src="assets/images/auth-workflow/eaton_stacked_logo.png"
                            style="max-width: 100%; max-height: 80px;"
                        />
                    </div>
                    <div pxb-login-footer style="text-align: center;">
                        <img
                            src="assets/images/auth-workflow/cybersecurity_certified.png"
                            style="max-width: 30%; align-self: center;"
                        />
                    </div>
                </pxb-login>
            </ng-template>
        </pxb-auth>
    `,
})
export class AuthComponent {
    constructor(pxbAuthConfig: PxbAuthConfig) {
        pxbAuthConfig.backgroundImage = 'assets/images/auth-workflow/background.svg';
        pxbAuthConfig.allowDebugMode = true;
        pxbAuthConfig.showSelfRegistration = false;

        // If the ON_AUTHENTICATED route is not pre-populated by PXB auth workflow, provide it below.
        if (!AUTH_ROUTES.ON_AUTHENTICATED || AUTH_ROUTES.ON_AUTHENTICATED === '/') {
            AUTH_ROUTES.ON_AUTHENTICATED = 'home';
        }
    }
}
