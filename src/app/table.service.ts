import { Injectable } from '@angular/core';

import {Table} from './table'
import {Player} from './player'


@Injectable()
export class TableService {

  constructor() { }

  getTable(tableId:number): Table{
    let table = new Table();

    let player1 = new Player();
    player1.name = "Mukesh";
    player1.id = "43";
    table.players.push(player1);

    let player2 = new Player();
    player2.name = "Subodh";
    player2.id = "28";
    table.players.push(player2);

    return table;
  }

}