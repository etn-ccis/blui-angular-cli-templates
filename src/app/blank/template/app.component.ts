import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { ViewportService } from './services/viewport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    colors = Colors;

    constructor(private readonly _viewportService: ViewportService) {}

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }
}
