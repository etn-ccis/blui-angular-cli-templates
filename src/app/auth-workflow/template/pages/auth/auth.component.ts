import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    template: `
        <pxb-auth [loginRef]="loginPage">
            <ng-template #loginPage>
                <pxb-login>
                    <div pxb-login-header>
                        <img
                            src="assets/auth-workflow/eaton_stacked_logo.png"
                            style="max-width: 100%; max-height: 80px;"
                        />
                    </div>
                    <div pxb-login-footer style="text-align: center;">
                        <img
                            src="assets/auth-workflow/cybersecurity_certified.png"
                            style="max-width: 30%; align-self: center;"
                        />
                    </div>
                </pxb-login>
            </ng-template>
        </pxb-auth>
    `,
})
export class AuthComponent {}
