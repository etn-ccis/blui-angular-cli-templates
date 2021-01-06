import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { DrawerStateService } from './services/drawer-state/drawer-state.service';
import { ViewportService } from './services/viewport/viewport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    colors: Record<string, any>;
    variant: DrawerLayoutVariantType = 'persistent';

    constructor(
        private readonly _domSanitizer: DomSanitizer,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _viewportService: ViewportService,
        private readonly _stateService: DrawerStateService
    ) {
        this.colors = PXBColors;
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
