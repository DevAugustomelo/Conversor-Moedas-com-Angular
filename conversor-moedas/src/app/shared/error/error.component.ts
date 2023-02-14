import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: string
    
    ) {
      this.data = this.data
    }







}
