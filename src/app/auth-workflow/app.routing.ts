import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PxbAuthGuard, AUTH_ROUTES, getAuthSubRoutes } from '@pxblue/angular-auth-workflow';
import { OverviewComponent } from './pages/overview/overview.component';
import { HomeComponent } from './pages/overview/home/home.component';
import { PageOneComponent } from './pages/overview/page-one/page-one.component';
import { PageTwoComponent } from './pages/overview/page-two/page-two.component';

const authWorkflowRoutes = getAuthSubRoutes();
const routes: Routes = [
    { path: '', redirectTo: AUTH_ROUTES.AUTH_WORKFLOW, pathMatch: 'full' },
    { path: AUTH_ROUTES.AUTH_WORKFLOW, component: AuthComponent, children: authWorkflowRoutes },
    {
        path: '',
        canActivate: [PxbAuthGuard],
        component: OverviewComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'page-one', component: PageOneComponent },
            { path: 'page-two', component: PageTwoComponent },
        ],
    },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
