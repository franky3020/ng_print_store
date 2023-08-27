import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  name = '';

  @Input()
  productPrice = 0;

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
