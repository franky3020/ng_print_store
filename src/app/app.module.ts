import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonWithTipComponent } from './component/button-with-tip/button-with-tip.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DemoComponentPageComponent } from './page/demo-component-page/demo-component-page.component';
import { ImgCardComponent } from './component/img-card/img-card.component';
import {NgOptimizedImage} from "@angular/common";
import { TypingTextComponent } from './component/typing-text/typing-text.component';
import { TestMatterJsPageComponent } from './page/test-matter-js-page/test-matter-js-page.component';
import { CoolBuyBtnComponent } from './component/cool-buy-btn/cool-buy-btn.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonWithTipComponent,
    HomePageComponent,
    DemoComponentPageComponent,
    ImgCardComponent,
    TypingTextComponent,
    TestMatterJsPageComponent,
    CoolBuyBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
