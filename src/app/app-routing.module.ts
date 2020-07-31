import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { FormCreateCompanyComponent } from './form-create-company/form-create-company.component';

const routes: Routes = [
    { path: 'signin', component: SignInPageComponent },
    { path: 'signup', component: SignUpPageComponent },
    { path: 'companies', component: ListCompanyComponent },
    { path: 'companies/create', component: FormCreateCompanyComponent },
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