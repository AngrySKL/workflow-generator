import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndirectDndHandleComponent } from './components/indirect-dnd-handle/indirect-dnd-handle.component';
import { IndirectDragImageComponent } from './components/indirect-drag-image/indirect-drag-image.component';

@NgModule({
  declarations: [IndirectDndHandleComponent, IndirectDragImageComponent],
  imports: [CommonModule, MatIconModule],
  exports: [IndirectDndHandleComponent, IndirectDragImageComponent],
})
export class SharedModule {}
