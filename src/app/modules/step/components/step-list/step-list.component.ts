import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DraggableItem } from '@shared/models/draggable-item';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss'],
})
export class StepListComponent {
  draggables: DraggableItem[] = [
    {
      content: 'testdata',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata2',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata3',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    },
  ];

  constructor() {}
}
