import {Player} from './player'
import {Card} from './card'

export class Table {
  id:string;
  hostid:string;
  players:Player[];
  cards:Card[];
}