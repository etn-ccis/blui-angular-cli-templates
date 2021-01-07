import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PxbAuthModule, PxbAuthUIService, PxbRegisterUIService } from '@pxblue/angular-auth-workflow';
import { DrawerModule, EmptyStateModule } from '@pxblue/angular-components';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthUIService } from './services/auth-workflow/auth-ui.service';
import { RegisterUIService } from './services/auth-workflow/register-ui.service';
import { AuthComponent } from './pages/auth/auth.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HomeComponent } from './pages/navigation/home/home.component';
import { PageOneComponent } from './pages/navigation/page-one/page-one.component';
import { PageTwoComponent } from './pages/navigation/page-two/page-two.component';

@NgModule({
    declarations: [AppComponent, AuthComponent, NavigationComponent, HomeComponent, PageOneComponent, PageTwoComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        // mat
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        //pxblue
        DrawerModule,
        EmptyStateModule,
        PxbAuthModule,
    ],
    providers: [
        {
            provide: 'APP_NAME',
            useValue: 'PXB_AUTH_DEMO_APP',
        },
        {
            provide: PxbAuthUIService,
            useClass: AuthUIService,
        },
        {
            provide: PxbRegisterUIService,
            useClass: RegisterUIService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
