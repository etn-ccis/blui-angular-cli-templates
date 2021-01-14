import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { DrawerStateService } from './services/drawer-state/drawer-state.service';
import { ViewportService } from './services/viewport/viewport.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_NAV_ITEMS } from './components/drawer/drawer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    toolbarTitle: string;
    routeListener: Subscription;
    variant: DrawerLayoutVariantType = 'persistent';

    constructor(
        private readonly _router: Router,
        private readonly _domSanitizer: DomSanitizer,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _viewportService: ViewportService,
        private readonly _stateService: DrawerStateService
    ) {
        this._listenForRouteChanges();
    }

    // Observes route changes and determines which PXB Auth page to show via route name.
    private _listenForRouteChanges(): void {
        this.routeListener = this._router.events.subscribe((route) => {
            if (route instanceof NavigationEnd) {
                switch (route.urlAfterRedirects) {
                    case `/${APP_NAV_ITEMS.home.route}`: {
                        this.toolbarTitle = APP_NAV_ITEMS.home.title;
                        this._stateService.setSelectedItem(APP_NAV_ITEMS.home.title);
                        break;
                    }
                    case `/${APP_NAV_ITEMS.page1.route}`: {
                        this.toolbarTitle = APP_NAV_ITEMS.page1.title;
                        this._stateService.setSelectedItem(APP_NAV_ITEMS.page1.title);
                        break;
                    }
                    case `/${APP_NAV_ITEMS.page2.route}`: {
                        this.toolbarTitle = APP_NAV_ITEMS.page2.title;
                        this._stateService.setSelectedItem(APP_NAV_ITEMS.page2.title);
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
