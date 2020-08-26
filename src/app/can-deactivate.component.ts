import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
    componentCanDeactivate(): Observable<boolean> | boolean;
}