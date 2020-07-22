import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasExampleComponent } from './canvas-example.component';
import { Routes, RouterModule } from '@angular/router';



const canvasRoutes: Routes = [
  {
    path: '',
    component: CanvasExampleComponent
  }
];
@NgModule({
  declarations: [CanvasExampleComponent],
  imports: [RouterModule.forChild(canvasRoutes)]
})
export class CanvasExampleModule { }
