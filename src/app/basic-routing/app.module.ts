import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { DrawerModule } from '@pxblue/angular-components';
//material modules
import { FormsModule } from '@angular/forms';
import { DrawerComponent } from './drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent, DrawerComponent, HomeComponent, PageOneComponent, PageTwoComponent],
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
        //pxblue
        NgProgressIconsModule,
        DrawerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
