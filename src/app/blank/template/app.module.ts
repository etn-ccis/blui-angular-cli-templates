import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';

@NgModule({
    declarations: [AppComponent, PxbLogoComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
