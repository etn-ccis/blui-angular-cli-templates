import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_NAV_ITEMS } from './constants/nav-items';
import { HomeComponent } from './pages/navigation/home/home.component';
import { PageOneComponent } from './pages/navigation/page-one/page-one.component';
import { PageTwoComponent } from './pages/navigation/page-two/page-two.component';

const routes: Routes = [
    { path: '', redirectTo: APP_NAV_ITEMS.home.route, pathMatch: 'full' },
    { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
    { path: APP_NAV_ITEMS.page1.route, component: PageOneComponent },
    { path: APP_NAV_ITEMS.page2.route, component: PageTwoComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
