import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebuyerComponent } from './createbuyer.component';

describe('CreatebuyerComponent', () => {
  let component: CreatebuyerComponent;
  let fixture: ComponentFixture<CreatebuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
