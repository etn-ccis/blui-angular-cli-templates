import { ChangeDetectorRef, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PxbAuthSecurityService } from '@pxblue/angular-auth-workflow';
import { ViewportService } from '../../services/viewport/viewport.service';
import { DrawerStateService } from '../../services/drawer-state/drawer-state.service';
import { LocalStorageService } from '../../services/auth-workflow/localStorage.service';

@Component({
    selector: 'app-overview',
    template: `
        <pxb-drawer-layout [variant]="getVariant()" (backdropClick)="closeDrawer()">
            <app-drawer pxb-drawer></app-drawer>
            <div pxb-content style="display: flex; flex-direction: column; height: 100vh;">
                <mat-toolbar style="padding: 0 24px">
                    <button *ngIf="variant === 'temporary'" mat-icon-button (click)="openDrawer()">
                        <mat-icon>menu</mat-icon>
                    </button>
                    <h2>{{ toolbarTitle }}</h2>
                </mat-toolbar>
                <div style="display: flex; flex: 1; padding: 24px;">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </pxb-drawer-layout>
    `,
})
export class OverviewComponent {
    toolbarTitle: string;
    variant: DrawerLayoutVariantType = 'persistent';
    routeListener: Subscription;

    constructor(
        private readonly _router: Router,
        private readonly _domSanitizer: DomSanitizer,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _viewportService: ViewportService,
        private readonly _stateService: DrawerStateService,
        private readonly _pxbSecurityService: PxbAuthSecurityService,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _localStorageService: LocalStorageService
    ) {
        this._listenForRouteChanges();
    }

    getVariant(): DrawerLayoutVariantType {
        if (this.variant === 'persistent' && this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        } else if (this.variant === 'temporary' && !this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(true);
        }

        this.variant = this._viewportService.isSmall() ? 'temporary' : 'persistent';
        return this.variant;
    }

    closeDrawer(): void {
        this._stateService.setDrawerOpen(false);
    }

    openDrawer(): void {
        this._stateService.setDrawerOpen(true);
    }

    // Observes route changes and determines which PXB Auth page to show via route name.
    private _listenForRouteChanges(): void {
        this.routeListener = this._router.events.subscribe((route) => {
            if (route instanceof NavigationEnd) {
                switch (route.urlAfterRedirects) {
                    case '/home': {
                        this.toolbarTitle = 'Home';
                        break;
                    }
                    case '/page-one': {
                        this.toolbarTitle = 'Page One';
                        break;
                    }
                    case '/page-two': {
                        this.toolbarTitle = 'Page Two';
                        break;
                    }
                    default: {
                        this.toolbarTitle = '';
                    }
                }
            }
        });
    }
}
