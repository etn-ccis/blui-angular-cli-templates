import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule as BasicRoutingModule } from './app/basic-routing/app.module';
import { AppModule as AuthWorkflowModule } from './app/auth-workflow/app.module';
import { AppModule as BlankModule } from './app/blank/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

let bootstrapModule;
switch (environment.templateName) {
    case 'basic-routing': {
        bootstrapModule = BasicRoutingModule;
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
