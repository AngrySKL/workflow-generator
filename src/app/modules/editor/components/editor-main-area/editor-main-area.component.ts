import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-editor-main-area',
  templateUrl: './editor-main-area.component.html',
  styleUrls: ['./editor-main-area.component.scss'],
})
export class EditorMainAreaComponent {
  public lastDropEvent: DndDropEvent | null = null;
  public dropzoneEnabled: boolean = true;
  
  onDrop(event: DndDropEvent) {
    this.lastDropEvent = event;
  }
}
