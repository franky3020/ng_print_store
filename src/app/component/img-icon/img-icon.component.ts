import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-icon',
  templateUrl: './img-icon.component.html',
  styleUrls: ['./img-icon.component.css']
})
export class ImgIconComponent implements OnInit {
  @Input()
  height: number | undefined;

  heightPx = 'auto';

  // TODO: 目前只能 png
  @Input()
  imgName = 'print_logo';
  
  constructor() {
    
  }

  ngOnInit(): void {
    if (typeof this.height === "number") {
      this.heightPx = '' + this.height + 'rem';
    }
  }
  

}
