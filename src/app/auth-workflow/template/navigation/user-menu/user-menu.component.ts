import { Component } from '@angular/core';
import {
    AUTH_ROUTES,
    BluiAuthSecurityService,
    BluiChangePasswordDialogService,
} from '@brightlayer-ui/angular-auth-workflow';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
    open = false;

    constructor(
        private readonly _router: Router,
        private readonly _bluiSecurityService: BluiAuthSecurityService,
        private readonly _bluiChangePasswordService: BluiChangePasswordDialogService
    ) {}

    changePassword(): void {
        this.open = false;
        this._bluiChangePasswordService.openDialog();
    }

    logout(): void {
        this._bluiSecurityService.updateSecurityState({ isAuthenticatedUser: false });
        void this._router.navigate([AUTH_ROUTES.AUTH_WORKFLOW]);
    }
}
