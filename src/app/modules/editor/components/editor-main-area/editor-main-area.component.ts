import { Component } from '@angular/core';
import { DraggableItem } from '@shared/models/draggable-item';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';

@Component({
  selector: 'app-editor-main-area',
  templateUrl: './editor-main-area.component.html',
  styleUrls: ['./editor-main-area.component.scss'],
})
export class EditorMainAreaComponent {
  public lastDropEvent: DndDropEvent | null = null;
  public dropzoneEnabled: boolean = true;

  draggableList: DraggableItem[] = [];

  onDragged(item: any, effect: DropEffect) {
    if (effect === 'move') {
      const index = this.draggableList.indexOf(item);
      this.draggableList.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent) {
    if (this.draggableList && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = this.draggableList.length;
      }

      this.draggableList.splice(index, 0, event.data);
    }
  }
}
