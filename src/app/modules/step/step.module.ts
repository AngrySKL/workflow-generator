import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepListComponent } from './components/step-list/step-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [StepListComponent],
  imports: [
    CommonModule,
    SharedModule,
    DndModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [StepListComponent],
})
export class StepModule {}
