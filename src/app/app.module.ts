import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppTableComponent } from './app-table/app-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

