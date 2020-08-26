import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateCompanyComponent } from './form-create-company.component';

describe('FormCreateCompanyComponent', () => {
  let component: FormCreateCompanyComponent;
  let fixture: ComponentFixture<FormCreateCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateCompanyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
