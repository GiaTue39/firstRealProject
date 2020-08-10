import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../material.module';
import { ListCompanyComponent} from './components/list-company/list-company.component';
import { FormCreateCompanyComponent } from './components/form-create-company/form-create-company.component';
import { DetailCompanyComponent } from './components/detail-company/detail-company.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule, 
        AppMaterialModule,
        RouterModule.forChild([
            {
                path: 'companies',
                component: ListCompanyComponent,
            },
            {
                path: 'companies/create',
                component: FormCreateCompanyComponent
            },
            {
                path: 'companies/:id',
                component: DetailCompanyComponent
            },
        ])
    ],
    declarations: [
        ListCompanyComponent,
        FormCreateCompanyComponent,
        DetailCompanyComponent
    ]
})
export class CompanyModule { }
