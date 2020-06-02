import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Table } from '../table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../app.component.css', './table.component.css']
})

export class TableComponent implements OnInit {

  tableId:number = 0;
  table: Table;

  get hostPlayer(){
    let hostPlayer = this.table.players.find(x => x.id == this.table.hostid);
    if(hostPlayer) return hostPlayer;
    else return {name: "System"};
  }

  constructor(private tableService: TableService ) { }

  ngOnInit() {
    this.table = this.tableService.getTable(1);
  }

}