import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MyNameComponent } from './my-name/my-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RformsComponent } from './rforms/rforms.component';

@NgModule({
  declarations: [CounterComponent, MyNameComponent, RformsComponent],
  exports: [CounterComponent, MyNameComponent, RformsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PlaygroundModule { }
