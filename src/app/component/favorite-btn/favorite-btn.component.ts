import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.css']
})
export class FavoriteBtnComponent {

  showPreviewFillFavorite = false;
  showBigFillFavorite = false;
  isPreview = true;

  hoverEff = true;

  
  setShowFillFavorite(): void {
    if (this.isPreview && this.hoverEff) {
      this.showPreviewFillFavorite = true;
    }
    
  }

  setHideFillFavorite(): void {
    if (this.isPreview) {
      this.showPreviewFillFavorite = false;
      this.hoverEff = true;
    }
  }
  
  onFavoriteClick() {
    // TODO 放大的動畫效果
    if (!this.showBigFillFavorite) {
      this.showPreviewFillFavorite = false;
      this.isPreview = false;
      this.showBigFillFavorite = true;
    } else {
      this.showPreviewFillFavorite = false;
      this.isPreview = true;
      this.showBigFillFavorite = false;
      this.hoverEff = false;
    }
    
  }
}
