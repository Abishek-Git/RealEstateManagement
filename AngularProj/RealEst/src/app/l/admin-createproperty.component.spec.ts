import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatepropertyComponent } from './admin-createproperty.component';

describe('AdminCreatepropertyComponent', () => {
  let component: AdminCreatepropertyComponent;
  let fixture: ComponentFixture<AdminCreatepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreatepropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
