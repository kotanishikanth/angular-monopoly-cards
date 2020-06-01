import {Card} from './card'

export class Player {
  id:string;
  name:string;
  cards:Card[]

  constructor(){
    this.cards = [];
  }
}