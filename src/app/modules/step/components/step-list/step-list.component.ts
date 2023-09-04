import { Component, OnInit } from '@angular/core';
import { DraggableItem } from '@shared/models/draggable-item';
import { GetProjectStepNamesResponse } from '@shared/models/project-step-names';
import { BackendService } from '@shared/services/backend.service';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss'],
})
export class StepListComponent implements OnInit {
  draggables: DraggableItem[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.get<GetProjectStepNamesResponse>('GetAllStepsByProjectName', {}, {}, { projectName: 'SampleProject' }).subscribe((result) => {
      result.projectStepNames.stepNames.forEach((name) => {
        const dragggble = {
          content: name,
          effectAllowed: 'move',
          disable: false,
          handle: false,
        } as DraggableItem;
        this.draggables.push(dragggble);
      });
    });
  }
}
