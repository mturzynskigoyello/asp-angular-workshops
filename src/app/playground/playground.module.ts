import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MyNameComponent } from './my-name/my-name.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CounterComponent, MyNameComponent],
  exports: [CounterComponent, MyNameComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ]
})
export class PlaygroundModule { }
