import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule, MatCardModule, MatSlideToggle, MatSlideToggleModule } from '@angular/material';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class TodoModule { }
