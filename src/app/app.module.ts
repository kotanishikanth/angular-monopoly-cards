import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TableComponent } from './table/table.component';
import { TableService } from './table.service';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TableComponent, PlayerComponent, CardComponent],
  bootstrap: [AppComponent],
  providers: [TableService]
})
export class AppModule {}

