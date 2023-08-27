import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-btn',
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.css']
})
export class CircleBtnComponent implements OnInit{

  @Input()
  iconName = '';
  
  ngOnInit() {
    
    if (this.iconName === '') {
      this.iconName = 'next_arrow_icon';
      console.error("app-circle-btn need set iconName");
    }
    
  }

}
