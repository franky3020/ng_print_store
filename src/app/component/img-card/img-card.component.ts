import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent {

  @Input()
  name = '';

  @Input()
  primaryImageSrc = '';
  @Input()
  secondaryImageSrc = '';

  @Output() nextBtnClick = new EventEmitter();



  imgSrc = 'https://picsum.photos/200/200';

  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.primaryImageSrc;
  }

  onMouseEnterTheImg() {
    this.imgSrc = this.secondaryImageSrc;
  }

  onMouseOutTheImg() {
    this.imgSrc = this.primaryImageSrc;
  }

  test() {
    console.log("btn Click");
  }

}
