import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonWithTipComponent } from './component/button-with-tip/button-with-tip.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DemoComponentPageComponent } from './page/demo-component-page/demo-component-page.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { NgOptimizedImage } from '@angular/common';
import { TypingTextComponent } from './component/typing-text/typing-text.component';
import { TestMatterJsPageComponent } from './page/test-matter-js-page/test-matter-js-page.component';
import { CoolBuyBtnComponent } from './component/cool-buy-btn/cool-buy-btn.component';
import { ImgIconComponent } from './component/img-icon/img-icon.component';
import { SearchInputComponent } from './component/search-input/search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteBtnComponent } from './component/favorite-btn/favorite-btn.component';
import { CircleBtnComponent } from './component/circle-btn/circle-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonWithTipComponent,
    HomePageComponent,
    DemoComponentPageComponent,
    ProductCardComponent,
    TypingTextComponent,
    TestMatterJsPageComponent,
    CoolBuyBtnComponent,
    ImgIconComponent,
    SearchInputComponent,
    FavoriteBtnComponent,
    CircleBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
