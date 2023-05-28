import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRedirectComponent } from './customer-redirect.component';

describe('CustomerRedirectComponent', () => {
  let component: CustomerRedirectComponent;
  let fixture: ComponentFixture<CustomerRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
