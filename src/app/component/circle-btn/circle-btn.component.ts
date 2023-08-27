import {Component, Input, OnInit} from '@angular/core';



export enum Color {
  red,
  black,
  green
}
@Component({
  selector: 'app-circle-btn',
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.css']
})
export class CircleBtnComponent implements OnInit{

  @Input()
  iconName = '';
  
  @Input()
  color = Color.green;
  
  ngOnInit() {
    
    if (this.iconName === '') {
      this.iconName = 'next_arrow_icon';
      console.error("app-circle-btn need set iconName");
    }
    
  }

  protected readonly Color = Color;
}
