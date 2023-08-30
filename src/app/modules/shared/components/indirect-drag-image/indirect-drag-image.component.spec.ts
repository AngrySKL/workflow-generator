import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectDragImageComponent } from './indirect-drag-image.component';

describe('IndirectDragImageComponent', () => {
  let component: IndirectDragImageComponent;
  let fixture: ComponentFixture<IndirectDragImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndirectDragImageComponent]
    });
    fixture = TestBed.createComponent(IndirectDragImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
