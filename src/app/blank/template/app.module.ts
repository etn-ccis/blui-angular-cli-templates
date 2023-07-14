/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { PxbLogoComponent } from './components/pxb-logo/pxb-logo.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, PxbLogoComponent],
    imports: [BrowserModule, CommonModule, MatButtonModule, MatDividerModule, MatToolbarModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
