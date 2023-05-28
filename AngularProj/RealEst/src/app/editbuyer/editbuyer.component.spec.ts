import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbuyerComponent } from './editbuyer.component';

describe('EditbuyerComponent', () => {
  let component: EditbuyerComponent;
  let fixture: ComponentFixture<EditbuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
