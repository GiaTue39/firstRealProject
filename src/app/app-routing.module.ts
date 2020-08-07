import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as trucComponent from './components';

import { AuthGuard } from './auth/auth.guard';
import { SigninGuard } from './auth/signin.guard';

const routes: Routes = [
    {
        path: 'signin',
        component: trucComponent.SignInPageComponent,
        canActivate: [SigninGuard]
    },
    {
        path: 'signup',
        component: trucComponent.SignUpPageComponent
    },
    {
        path: '',
        component: trucComponent.LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'companies', pathMatch: 'full' },
            {
                path: 'companies',
                component: trucComponent.ListCompanyComponent,
            },
            {
                path: 'companies/create',
                component: trucComponent.FormCreateCompanyComponent
            },
            {
                path: 'companies/:id',
                component: trucComponent.DetailCompanyComponent
            }
        ]
    },

    // { path: '**', component: 404PageComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }