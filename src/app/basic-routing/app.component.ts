import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { DrawerStateService } from './services/drawer-state/drawer-state.service';
import { ViewportService } from './services/viewport/viewport.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    toolbarTitle: string;
    colors: Record<string, any>;
    routeListener: Subscription;
    variant: DrawerLayoutVariantType = 'persistent';

    constructor(
        private readonly _router: Router,
        private readonly _domSanitizer: DomSanitizer,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _viewportService: ViewportService,
        private readonly _stateService: DrawerStateService
    ) {
        this.colors = PXBColors;
        this._listenForRouteChanges();
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
}
