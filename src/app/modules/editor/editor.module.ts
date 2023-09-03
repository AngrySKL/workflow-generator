import { DndModule } from 'ngx-drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorMainAreaComponent } from './components/editor-main-area/editor-main-area.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EditorMainAreaComponent],
  imports: [CommonModule, DndModule, FlexLayoutModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [EditorMainAreaComponent],
})
export class EditorModule {}
