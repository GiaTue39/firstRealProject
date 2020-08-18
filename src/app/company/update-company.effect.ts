import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap, exhaustMap } from "rxjs/operators";

import { UpdateCompanyActions } from "./actions";
import { CompanyService } from "./services/company.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UpdateCompanyEffect {
  notify: any;

  updateCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCompanyActions.updateCompany),
      exhaustMap(({ id, company }) =>
        this.companyService.update(id, company).pipe(
          map((res) =>
            UpdateCompanyActions.updateCompanySuccess({ company: res })
          ),
          catchError((error) =>
            of(UpdateCompanyActions.updateCompanyFailure({ error }))
          )
        )
      )
    )
  );
  onUpdateEmployeeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UpdateCompanyActions.updateCompanySuccess),
        tap(() => {

          this.snackBar.open("Updated successfully ! :D", "Cancel", {
            duration: 2000,
          });

          this.router.navigate(['/companies']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }
}

