import { Injectable } from '@angular/core';
import { ViewportService } from '../viewport/viewport.service';

@Injectable({
    providedIn: 'root',
})
export class DrawerStateService {
    private drawerOpen: boolean;

    constructor(viewportService: ViewportService) {
        this.drawerOpen = !viewportService.isSmall();
    }

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
    }

    getDrawerOpen(): boolean {
        return this.drawerOpen;
    }
}
