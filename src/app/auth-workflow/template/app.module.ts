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
import {
    DrawerModule,
    EmptyStateModule,
    InfoListItemModule,
    SpacerModule,
    UserMenuModule,
} from '@pxblue/angular-components';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
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
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        DrawerModule,
        InfoListItemModule,
        SpacerModule,
        EmptyStateModule,
        PxbAuthModule,
        UserMenuModule,
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
