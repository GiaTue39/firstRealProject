import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from './can-deactivate.component';

export class LeavePageGuard implements CanDeactivate<CanDeactivateComponent> {

    canDeactivate(
        component: CanDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (component.componentCanDeactivate && typeof component.componentCanDeactivate === 'function') {
            return component.componentCanDeactivate();
        }

        return true;
    }

}