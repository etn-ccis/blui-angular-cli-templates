import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { ViewportService } from '../../services/viewport.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    colors = Colors;

    constructor(private readonly _viewportService: ViewportService) {}

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }
}
