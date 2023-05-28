import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpropertyComponent } from './admin-editproperty.component';

describe('AdminEditpropertyComponent', () => {
  let component: AdminEditpropertyComponent;
  let fixture: ComponentFixture<AdminEditpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditpropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
