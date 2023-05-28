import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatesellerComponent } from './admin-createseller.component';

describe('AdminCreatesellerComponent', () => {
  let component: AdminCreatesellerComponent;
  let fixture: ComponentFixture<AdminCreatesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreatesellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
