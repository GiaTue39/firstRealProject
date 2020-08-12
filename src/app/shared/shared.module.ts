import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from '../components/page/page.component';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PageContentComponent } from '../components/page-content/page-content.component';

@NgModule({
  declarations: [

    PageComponent,
    PageHeaderComponent,
    PageContentComponent
  ],
  exports: [
    PageComponent,
    PageHeaderComponent,
    PageContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
