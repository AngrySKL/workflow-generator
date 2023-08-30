import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepListComponent } from './step-list.component';

describe('StepListComponent', () => {
  let component: StepListComponent;
  let fixture: ComponentFixture<StepListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepListComponent]
    });
    fixture = TestBed.createComponent(StepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
