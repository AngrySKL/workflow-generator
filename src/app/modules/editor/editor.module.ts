import { DndModule } from 'ngx-drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorMainAreaComponent } from './components/editor-main-area/editor-main-area.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [EditorMainAreaComponent],
  imports: [CommonModule, DndModule, FlexLayoutModule, MatCardModule, MatListModule],
  exports: [EditorMainAreaComponent],
})
export class EditorModule {}
