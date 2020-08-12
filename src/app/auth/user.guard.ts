import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserRoleGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // boolean
        // const role = localStorage.getItem('role');
        // if (role === 'user' && state.url.includes('companies')) {
        //     this.router.navigate(['employees']);
        //     return false;
        // }
        // return true;


        // Promise
        // return this.getRole()
        //     .then((role) => {
        //         console.log(role);
        //         if (role === 'user' && state.url.includes('companies')) {
        //             this.router.navigate(['employees']);
        //             return false;
        //         }
        //         return true;
        //     })
        //     .then((data) => {
        //         console.log(data);

        //         return data;
        //     })



        return this.getRoleObservable().pipe(
            map(role => {
                if (role === 'user' && state.url.includes('companies')) {
                    this.router.navigate(['employees']);
                    return false;
                }
                return true;
            })
        );
    }

    getRole(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const role = localStorage.getItem('role');
                resolve(role);
            }, 1000);
        });
    }

    getRoleObservable(): Observable<string> {
        const role = localStorage.getItem('role');
        return of(role);
    }
}
