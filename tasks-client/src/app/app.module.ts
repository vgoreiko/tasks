import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent, TaskEditComponent, TasksListComponent } from './tasks';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TasksListComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
