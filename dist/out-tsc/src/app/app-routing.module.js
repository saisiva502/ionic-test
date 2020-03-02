import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'res-list/:type',
        loadChildren: () => import('./res-list/res-list.module').then(m => m.ResListPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'res-detail/:type/:id',
        loadChildren: () => import('./res-detail/res-detail.module').then(m => m.ResDetailPageModule),
        canActivate: [AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map