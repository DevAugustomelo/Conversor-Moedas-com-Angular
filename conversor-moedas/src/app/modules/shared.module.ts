import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { MaterialModule } from './material.module';
import { ErrorComponent } from '../shared/error/error.component';







@NgModule({
  declarations: [
    ErrorComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    ErrorComponent

  ],
})
export class SharedModule { }
