import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

 
const routes: Routes = [
    { path: 'login', component: SignInPageComponent },

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