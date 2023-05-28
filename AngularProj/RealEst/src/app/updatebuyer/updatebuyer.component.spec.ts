import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebuyerComponent } from './updatebuyer.component';

describe('UpdatebuyerComponent', () => {
  let component: UpdatebuyerComponent;
  let fixture: ComponentFixture<UpdatebuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
