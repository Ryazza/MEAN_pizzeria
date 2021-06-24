import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizza-text',
  templateUrl: './pizza-text.component.html',
  styleUrls: ['./pizza-text.component.css']
})
export class PizzaTextComponent implements OnInit {

  @Input() pizza;
  constructor() { }

  ngOnInit(): void {
  }

}
