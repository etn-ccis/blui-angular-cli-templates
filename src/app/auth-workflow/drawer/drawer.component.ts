import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem } from '@pxblue/angular-components';
import { Router } from '@angular/router';
import { DrawerStateService } from '../services/drawer-state/drawer-state.service';
import { ViewportService } from '../services/viewport/viewport.service';

@Component({
    selector: 'app-drawer',
    styleUrls: ['./drawer.component.scss'],
    template: `
        <pxb-drawer [open]="isOpen()">
            <pxb-drawer-header
                title="PX Blue Drawer"
                subtitle="Organize your menu items here"
                class="test-background-image"
            >
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
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;
    selectedItemId = 'Home';
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
        private readonly _stateService: DrawerStateService,
        private readonly _viewportService: ViewportService,
        private readonly _router: Router,
        private readonly _changeDetector: ChangeDetectorRef
    ) {}

    navigate(url: string): void {
        void this._router.navigateByUrl(url);
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

    toggleDrawerOpen(): void {
        this._stateService.setDrawerOpen(!this._stateService.getDrawerOpen());
    }
}
