import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap, exhaustMap } from "rxjs/operators";

import { DeleteCompanyActions } from "./actions";
import { CompanyService } from "./services/company.service";
import { Router } from '@angular/router';

@Injectable()
export class DeleteCompanyEffect {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private router: Router
  ) {}

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteCompanyActions.deleteCompany),
      map((action) => action.id),
      exhaustMap((id: string) =>
        this.companyService.deleteCompany(id).pipe(
          map(() => DeleteCompanyActions.deleteCompanySuccess({ id })),
          catchError((error) =>
            of(DeleteCompanyActions.deleteCompanyFailure({ error }))
          )
        )
      )
    )
  );
}

