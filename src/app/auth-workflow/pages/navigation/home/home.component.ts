import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PxbChangePasswordDialogService, AUTH_ROUTES, PxbAuthSecurityService } from '@pxblue/angular-auth-workflow';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(
        private readonly _router: Router,
        private readonly _pxbSecurityService: PxbAuthSecurityService,
        private readonly _pxbChangePasswordService: PxbChangePasswordDialogService
    ) {}

    openDialog(): void {
        this._pxbChangePasswordService.openDialog();
    }

    logout(): void {
        this._pxbSecurityService.updateSecurityState({ isAuthenticatedUser: false });
        void this._router.navigate([AUTH_ROUTES.AUTH_WORKFLOW]);
    }
}
