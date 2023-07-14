/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';

import { BluiAuthModule, BluiAuthUIService, BluiRegisterUIService } from '@brightlayer-ui/angular-auth-workflow';
import {
    DrawerModule,
    EmptyStateModule,
    InfoListItemModule,
    SpacerModule,
    UserMenuModule,
} from '@brightlayer-ui/angular-components';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';
import { UserMenuComponent } from './navigation/user-menu/user-menu.component';
import { AuthUIService } from './services/auth-workflow/auth-ui/auth-ui.service';
import { RegisterUIService } from './services/auth-workflow/register-ui/register-ui.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        NavigationComponent,
        HomeComponent,
        PageOneComponent,
        PageTwoComponent,
        PxbLogoComponent,
        UserMenuComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        DrawerModule,
        InfoListItemModule,
        SpacerModule,
        EmptyStateModule,
        BluiAuthModule,
        UserMenuModule,
    ],
    providers: [
        {
            provide: 'APP_NAME',
            useValue: 'Blui_AUTH_DEMO_APP',
        },
        {
            provide: BluiAuthUIService,
            useClass: AuthUIService,
        },
        {
            provide: BluiRegisterUIService,
            useClass: RegisterUIService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
