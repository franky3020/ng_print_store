import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  name = '';

  @Input()
  productPrice = 0;

  @Input()
  imgSrcArray: string[] = [];

  @Output() nextBtnClick = new EventEmitter();

  imgSrc = 'https://picsum.photos/200/200';
  
  imgIndex = 0;

  constructor() {
  }

  ngOnInit() {
    if (this.imgSrcArray.length > 0) {
      this.imgSrc = this.imgSrcArray[this.imgIndex];
    }
  }

  test() {
    console.log("btn Click");
  }

  nextImg() {
    
    const imgArraySize = this.imgSrcArray.length;
    this.imgIndex++;
    if (this.imgIndex >= imgArraySize) {
      this.imgIndex = 0;
    }
    this.imgSrc = this.imgSrcArray[this.imgIndex];
  }

  previousImg() {

    const imgArrayLastIndex = this.imgSrcArray.length - 1;
    
    this.imgIndex--;
    if (this.imgIndex < 0) {
      this.imgIndex = imgArrayLastIndex;
    }
    this.imgSrc = this.imgSrcArray[this.imgIndex];
  }
}
