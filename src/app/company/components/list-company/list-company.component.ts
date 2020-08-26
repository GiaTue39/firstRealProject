import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { CompanyActions, DeleteCompanyActions } from "../../actions";
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';

import { Store, select } from "@ngrx/store";

import {
  selectIsLoadingCompanies,
  selectAllCompanies,
  selectAllCompany,
} from "../../selectors/company.selector";

import {
  selectIsDeleteCompany
} from "../../selectors/delete-company.selector";

import { Observable } from "rxjs";
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'employee', 'orders', 'menu'];
  dataSource = [];
  dataS = new MatTableDataSource<Company>(this.dataSource);
  isLoading = false;

  selection = new SelectionModel<Company>(true, []);

  companies$: Observable<Array<Company>>;
  isLoading$: Observable<boolean>;
  isDeleted$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private companyService: CompanyService,
    private store: Store,
    private translocoService: TranslocoService
  ) {
    this.store.dispatch(CompanyActions.loadCompanies({}));

    this.companies$ = this.store.pipe(select(selectAllCompany));
     this.companies$.subscribe((data) => {
      console.log(data)
      this.dataSource = data;
    })
    this.isLoading$ = this.store.pipe(select(selectIsLoadingCompanies));

  }



  ngOnInit() { }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Company): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    //return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialog(company: Company): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      panelClass: 'delete-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.onDelete(company);
      }

    });

  }

  onDelete(company: Company) {
    this.isDeleted$ = this.store.pipe(select(selectIsDeleteCompany));
    this.store.dispatch(DeleteCompanyActions.deleteCompany({ id: company.id }));
  }

}


