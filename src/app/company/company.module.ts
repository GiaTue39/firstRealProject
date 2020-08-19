import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../material.module';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { FormCreateCompanyComponent } from './components/form-create-company/form-create-company.component';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';
import { SharedModule } from '../shared/shared.module';
import { LeavePageGuard } from '../leave-page.guard';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AppMaterialModule,
        MatSnackBarModule,

        RouterModule.forChild([
            {
                path: '',
                component: ListCompanyComponent,
            },
            {
                path: 'create',
                component: FormCreateCompanyComponent,
                canDeactivate: [LeavePageGuard]
            },
            {
                path: ':id',
                component: DetailCompanyComponent,
                canDeactivate: [LeavePageGuard]
            },
        ])
    ],
    declarations: [
        ListCompanyComponent,
        FormCreateCompanyComponent,
        DetailCompanyComponent
    ],
    providers: [
        LeavePageGuard,
    ]
})
export class CompanyModule { }
