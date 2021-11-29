import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    template: `
        <blui-auth [loginRef]="loginPage">
            <ng-template #loginPage>
                <blui-login>
                    <div blui-login-header>
                        <img
                            src="assets/auth-workflow/eaton_stacked_logo.png"
                            style="max-width: 100%; max-height: 80px;"
                        />
                    </div>
                    <div blui-login-footer style="text-align: center;">
                        <img
                            src="assets/auth-workflow/cybersecurity_certified.png"
                            style="max-width: 30%; align-self: center;"
                        />
                    </div>
                </blui-login>
            </ng-template>
        </blui-auth>
    `,
})
export class AuthComponent {}
