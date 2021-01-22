import { Component } from '@angular/core';
import { LocalStorageService } from './services/auth-workflow/local-storage/local-storage.service';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
    constructor(localStorageService: LocalStorageService) {
        localStorageService.listenForAuthLoadingStateChanges();
    }
}
