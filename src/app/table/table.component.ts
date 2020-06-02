import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Table } from '../table';

import { Card } from '../card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../app.component.css', './table.component.css']
})

export class TableComponent implements OnInit {

  hostPlayer:any;
  myId:string;
  table: Table;

  firstCard:Card = new Card();
  
  constructor(private tableService: TableService ) { }

  ngOnInit() {
    this.table = this.tableService.getTable(1);

    this.hostPlayer = this.table.players.find(x => x.id == this.table.hostid);
    if(this.hostPlayer) {}
    else this.hostPlayer = {name: "System"};

    this.firstCard = new Card();
    this.firstCard.color = "red"
    this.firstCard.title = "Med City"

  }

}