import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css'],
})
export class TypingTextComponent {
  @Input()
  typingText: string = '';

  typingWidth = 0;

  // 讓輸入後的文字後面有一些空白
  private blankLength = 3;

  constructor() {}

  ngOnInit() {
    this.typingWidth = this.getTextLength(this.typingText) + this.blankLength;
  }

  /**
   * TODO: 需調整成輸入可計算英文與中文的字數, 目前假設都是中文
   * @param text
   * @private
   */
  getTextLength(text: string) {
    return text.length * 2;
  }
}
