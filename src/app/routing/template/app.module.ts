import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//pxblue modules
import { DrawerModule, EmptyStateModule } from '@pxblue/angular-components';

//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
    declarations: [AppComponent, DrawerComponent, HomeComponent, PageOneComponent, PageTwoComponent, PxbLogoComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        FlexLayoutModule,
        // mat
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        //pxblue
        DrawerModule,
        EmptyStateModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
