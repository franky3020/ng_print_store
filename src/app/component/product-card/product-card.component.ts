import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from "../circle-btn/circle-btn.component";

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

  @Input()
  createUser = '';

  @Input()
  hasDeleteBtn = false;

  @Output() deleteBtnClick = new EventEmitter();

  @Output() nextBtnClick = new EventEmitter();

  imgSrc = 'https://picsum.photos/200/200';
  
  imgIndex = 0;
  
  get Color() {
    return Color;
  }

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
