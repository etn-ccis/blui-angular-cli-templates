import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PxbAuthGuard, AUTH_ROUTES, getAuthSubRoutes } from '@pxblue/angular-auth-workflow';
import { APP_NAV_ITEMS } from './navigation/nav-items';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const authWorkflowRoutes = getAuthSubRoutes();
const routes: Routes = [
    { path: '', redirectTo: AUTH_ROUTES.AUTH_WORKFLOW, pathMatch: 'full' },
    { path: AUTH_ROUTES.AUTH_WORKFLOW, component: AuthComponent, children: authWorkflowRoutes },
    {
        path: '',
        canActivate: [PxbAuthGuard],
        component: NavigationComponent,
        children: [
            { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
            { path: APP_NAV_ITEMS.page1.route, component: PageOneComponent },
            { path: APP_NAV_ITEMS.page2.route, component: PageTwoComponent },
        ],
    },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
