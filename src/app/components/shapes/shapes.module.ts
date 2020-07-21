import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapesComponent } from './shapes.component';

const shapesRoutes: Routes = [
  {
    path: '',
    component: ShapesComponent
  }
];

@NgModule({
  declarations: [ShapesComponent],
  imports: [RouterModule.forChild(shapesRoutes)]
})
export class ShapesModule { }