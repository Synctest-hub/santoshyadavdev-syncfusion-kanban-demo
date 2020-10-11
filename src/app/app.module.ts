import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
