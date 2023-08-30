import { DndModule } from 'ngx-drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorMainAreaComponent } from './components/editor-main-area/editor-main-area.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [EditorMainAreaComponent],
  imports: [CommonModule, DndModule, MatCardModule, MatSlideToggleModule],
  exports: [EditorMainAreaComponent],
})
export class EditorModule {}
