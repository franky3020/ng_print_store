import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent {

  imgSrc = 'https://picsum.photos/200/200';

  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.primaryImageSrc;
    console.log("this.primaryImageSrc, this.secondaryImageSrc");
    console.log(this.primaryImageSrc, this.secondaryImageSrc);
  }

  ngAfterViewInit() {
    console.log("this.primaryImageSrc, this.secondaryImageSrc");
    console.log(this.primaryImageSrc, this.secondaryImageSrc);
  }

  @Input()
  primaryImageSrc = '';
  @Input()
  secondaryImageSrc = '';

  onMouseEnterTheImg() {
    this.imgSrc = this.secondaryImageSrc;
  }

  onMouseOutTheImg() {
    this.imgSrc = this.primaryImageSrc;
  }

}
