import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { Router } from '@angular/router';
import { DrawerStateService } from '../../services/drawer-state/drawer-state.service';
import { ViewportService } from '../../services/viewport/viewport.service';

export type NavItem = {
    title: string;
    route: string;
    icon: string;
};

const homeNavItem: NavItem = {
    title: 'Home',
    route: 'home',
    icon: 'home',
};
const pageOneNavItem: NavItem = {
    title: 'Page 1',
    route: 'page-one',
    icon: 'looks_one',
};
const pageTwoNavItem: NavItem = {
    title: 'Page 2',
    route: 'page-two',
    icon: 'looks_two',
};

export const APP_NAV_ITEMS = {
    home: homeNavItem,
    page1: pageOneNavItem,
    page2: pageTwoNavItem,
};

@Component({
    selector: 'app-drawer',
    template: `
        <pxb-drawer [open]="isOpen()">
            <pxb-drawer-header title="PX Blue" subtitle="Angular Project">
                <button mat-icon-button pxb-icon (click)="toggleDrawerOpen()">
                    <mat-icon>menu</mat-icon>
                </button>
            </pxb-drawer-header>
            <pxb-drawer-body>
                <pxb-drawer-nav-group>
                    <pxb-drawer-nav-item
                        *ngFor="let navItem of navItems"
                        [divider]="true"
                        [title]="navItem.title"
                        [selected]="navItem.title === stateService.getSelectedItem()"
                        (select)="selectItem(navItem)"
                    >
                        <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                    </pxb-drawer-nav-item>
                </pxb-drawer-nav-group>
            </pxb-drawer-body>
        </pxb-drawer>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;
    navItems = [APP_NAV_ITEMS.home, APP_NAV_ITEMS.page1, APP_NAV_ITEMS.page2];

    constructor(
        public stateService: DrawerStateService,
        private readonly _router: Router,
        private readonly _viewportService: ViewportService,
        private readonly _changeDetector: ChangeDetectorRef
    ) {}

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
    }

    isOpen(): boolean {
        return this.stateService.getDrawerOpen();
    }

    selectItem(navItem: NavItem): void {
        this.navigate(navItem.route);
        if (this._viewportService.isSmall()) {
            this.stateService.setDrawerOpen(false);
        }
    }

    toggleDrawerOpen(): void {
        this.stateService.setDrawerOpen(!this.stateService.getDrawerOpen());
    }
}
