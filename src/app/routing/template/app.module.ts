import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

//pxblue modules
import { DrawerModule, EmptyStateModule } from '@pxblue/angular-components';

//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HomeComponent } from './pages/navigation/home/home.component';
import { PageTwoComponent } from './pages/navigation/page-two/page-two.component';
import { PageOneComponent } from './pages/navigation/page-one/page-one.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        PageOneComponent,
        PageTwoComponent,
        PxbLogoComponent,
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
        DrawerModule,
        EmptyStateModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
