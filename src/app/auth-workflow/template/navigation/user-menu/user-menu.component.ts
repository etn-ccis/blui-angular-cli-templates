import { Component } from '@angular/core';
import { AUTH_ROUTES, PxbAuthSecurityService, PxbChangePasswordDialogService } from '@pxblue/angular-auth-workflow';
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
        private readonly _pxbSecurityService: PxbAuthSecurityService,
        private readonly _pxbChangePasswordService: PxbChangePasswordDialogService
    ) {}

    changePassword(): void {
        this.open = false;
        this._pxbChangePasswordService.openDialog();
    }

    logout(): void {
        this._pxbSecurityService.updateSecurityState({ isAuthenticatedUser: false });
        void this._router.navigate([AUTH_ROUTES.AUTH_WORKFLOW]);
    }
}
