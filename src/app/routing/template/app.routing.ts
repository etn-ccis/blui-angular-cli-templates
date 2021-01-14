import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { APP_NAV_ITEMS } from './components/drawer/drawer.component';

const routes: Routes = [
    { path: '', redirectTo: APP_NAV_ITEMS.home.route, pathMatch: 'full' },
    { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
    { path: APP_NAV_ITEMS.page1.route, component: PageOneComponent },
    { path: APP_NAV_ITEMS.page2.route, component: PageTwoComponent },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
