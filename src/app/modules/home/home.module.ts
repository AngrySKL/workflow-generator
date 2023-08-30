import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepModule } from '@modules/step/step.module';
import { EditorModule } from '@modules/editor/editor.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, StepModule, EditorModule, FlexLayoutModule],
})
export class HomeModule {}
