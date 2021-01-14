import { Component } from '@angular/core';
import { blue, white } from '@pxblue/colors';
import { ViewportService } from '../../services/viewport/viewport.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    pxbBlue = blue;
    pxbWhite = white;

    constructor(private readonly _viewportService: ViewportService) {}

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }
}
