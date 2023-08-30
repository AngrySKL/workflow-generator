import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMainAreaComponent } from './editor-main-area.component';

describe('EditorMainAreaComponent', () => {
  let component: EditorMainAreaComponent;
  let fixture: ComponentFixture<EditorMainAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorMainAreaComponent]
    });
    fixture = TestBed.createComponent(EditorMainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
