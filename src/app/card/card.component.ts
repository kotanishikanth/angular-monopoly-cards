import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  mode: 'close-big' | 'close-small' | 'open-big' | 'open-small' = "close-small";

  @Input() card:Card;

  constructor() { }

  ngOnInit() {
    this.card.color = "green"
  }

  toggleCardSize(){
    switch(this.mode)
    {
      case 'close-big':
        this.mode = 'close-small';
        break;
      case 'close-small':
        this.mode = 'close-big';
        break;
      case 'open-big':
        this.mode = 'open-small';
        break;
      case 'open-small':
        this.mode = 'open-big';
        break;
    } 
  }

}