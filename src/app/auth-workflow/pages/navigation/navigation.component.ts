import { ChangeDetectorRef, Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DrawerLayoutVariantType, DrawerNavItem } from '@pxblue/angular-components';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PxbAuthSecurityService } from '@pxblue/angular-auth-workflow';
import { ViewportService } from '../../services/viewport/viewport.service';
import { DrawerStateService } from '../../services/drawer-state/drawer-state.service';
import { LocalStorageService } from '../../services/auth-workflow/localStorage.service';

@Component({
    selector: 'app-navigation',
    template: `
        <pxb-drawer-layout [variant]="getVariant()" (backdropClick)="closeDrawer()">
            <pxb-drawer pxb-drawer [open]="isOpen()">
                <pxb-drawer-header title="PX Blue Drawer" subtitle="Organize your menu items here">
                    <button mat-icon-button pxb-icon (click)="toggleDrawerOpen()">
                        <mat-icon>menu</mat-icon>
                    </button>
                </pxb-drawer-header>
                <pxb-drawer-body>
                    <pxb-drawer-nav-group>
                        <pxb-drawer-nav-item
                            *ngFor="let navItem of navItems"
                            [title]="navItem.title"
                            [subtitle]="navItem.subtitle"
                            [divider]="true"
                            [selected]="selectedItemId === navItem.title"
                            (select)="navItem.onSelect(); setActive(navItem.title)"
                        >
                            <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                        </pxb-drawer-nav-item>
                    </pxb-drawer-nav-group>
                </pxb-drawer-body>
            </pxb-drawer>
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
    styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
    toolbarTitle: string;
    routeListener: Subscription;

    selectedItemId = 'Home';
    variant: DrawerLayoutVariantType = 'persistent';

    navItems: DrawerNavItem[] = [
        {
            title: 'Home',
            onSelect: (): void => this.navigate('/home'),
            icon: 'home',
        },
        {
            title: 'Page 1',
            onSelect: (): void => this.navigate('/page-one'),
            icon: 'looks_one',
        },
        {
            title: 'Page 2',
            onSelect: (): void => this.navigate('/page-two'),
            icon: 'looks_two',
        },
    ];

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

    toggleDrawerOpen(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }

    isOpen(): boolean {
        return this._stateService.getDrawerOpen();
    }

    setActive(id: string): void {
        this.selectedItemId = id;
        if (this._viewportService.isSmall()) {
            this._stateService.setDrawerOpen(false);
        }
    }

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
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
