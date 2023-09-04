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

  generateWorkflow() {
    var json = JSON.stringify(this.generateSteps(), null, ' ');
    var blob = new Blob([json], { type: 'text/plain;charset=utf-8' });
    var url = window.URL || window.webkitURL;
    var link = url.createObjectURL(blob);
    var a = document.createElement('a');
    a.download = 'sample-project-workflow.json';
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  generateSteps() {
    var workflow = {
      Id: 'Test',
      Version: 1,
      Description: '',
      Steps: [] as any,
    };
    let stepId = 1;
    this.draggableList.forEach((draggable) =>
      workflow.Steps.push({
        Id: `Step${stepId}`,
        StepType: `WorkflowExecutor.SampleProject.Steps.${draggable.content}, WorkflowExecutor.SampleProject`,
        NextStepId: `Step${++stepId}`,
      })
    );

    return workflow;
  }
}
