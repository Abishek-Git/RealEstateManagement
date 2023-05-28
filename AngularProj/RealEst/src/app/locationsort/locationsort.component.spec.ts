import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsortComponent } from './locationsort.component';

describe('LocationsortComponent', () => {
  let component: LocationsortComponent;
  let fixture: ComponentFixture<LocationsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
