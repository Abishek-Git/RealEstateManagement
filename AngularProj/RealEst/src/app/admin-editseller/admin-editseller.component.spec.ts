import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditsellerComponent } from './admin-editseller.component';

describe('AdminEditsellerComponent', () => {
  let component: AdminEditsellerComponent;
  let fixture: ComponentFixture<AdminEditsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditsellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
