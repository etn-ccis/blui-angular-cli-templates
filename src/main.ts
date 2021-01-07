import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule as RoutingModule } from './app/routing/template/app.module';
import { AppModule as AuthWorkflowModule } from './app/auth-workflow/template/app.module';
import { AppModule as BlankModule } from './app/blank/template/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

let bootstrapModule;
switch (environment.templateName) {
    case 'basic-routing': {
        bootstrapModule = RoutingModule;
        break;
    }
    case 'auth-workflow': {
        bootstrapModule = AuthWorkflowModule;
        break;
    }
    case 'blank':
    default: {
        bootstrapModule = BlankModule;
    }
}

platformBrowserDynamic()
    .bootstrapModule(bootstrapModule)
    .catch((err) => console.error(err));
