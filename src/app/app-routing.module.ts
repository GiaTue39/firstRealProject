import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { FormCreateCompanyComponent } from './form-create-company/form-create-company.component';
import { DetailCompanyComponent } from './detail-company/detail-company.component';

const routes: Routes = [
    { path: '', redirectTo: 'companies', pathMatch: 'full' },
    { path: 'signin', component: SignInPageComponent },
    { path: 'signup', component: SignUpPageComponent },
    { path: 'companies', component: ListCompanyComponent },
    { path: 'companies/create', component: FormCreateCompanyComponent },
    { path: 'companies/:id', component: DetailCompanyComponent },
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