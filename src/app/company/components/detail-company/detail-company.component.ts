import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { UpdateCompanyActions, CompanyActions } from '../../actions';
import { loadCompanyById } from '../../actions/company.action';
import { DetailCompanyModel } from '../../models/detailcompany';
import { selectCompanyById, selectAllRename } from '../../selectors/company.selector';
import { selectIsUpdateCompany } from "../../selectors/update-company.selector";

import { CanDeactivateComponent } from 'src/app/can-deactivate.component';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit, CanDeactivateComponent {

  @ViewChild('form') form: NgForm;
  detailCompany: DetailCompanyModel;

  isUpdated$: Observable<boolean>;
  detailCompany$: Observable<DetailCompanyModel>;

  trucDay$: Observable<string>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params.id;

    this.store.dispatch(loadCompanyById({ id }));

    this.detailCompany$ = this.store.pipe(select(selectCompanyById));
    this.isUpdated$ = this.store.pipe(select(selectIsUpdateCompany));

    this.trucDay$ = this.store.pipe(select(selectAllRename));
    this.trucDay$.subscribe(x => console.log(x));


    this.detailCompany$.subscribe(detailCompany => {
      if (detailCompany) {
        this.detailCompany = detailCompany
      }
    });
  }

  ngOnInit(): void { }

  componentCanDeactivate(): boolean {
    let notify: boolean;

    if (this.form.dirty) {
      notify = confirm("Do u want to leave DETAIL COMPANY page ?");
    }
    return notify;
  }

  onSubmit(form: NgForm): void {
    this.store.dispatch(UpdateCompanyActions.updateCompany({
      id: this.detailCompany.id,
      company: form.value
    }));
  }

  doiTen() {
    this.store.dispatch(CompanyActions.DoiTen());
  }
}
