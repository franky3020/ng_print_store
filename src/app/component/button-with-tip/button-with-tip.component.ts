import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-button-with-tip',
  templateUrl: './button-with-tip.component.html',
  styleUrls: ['./button-with-tip.component.css']
})
export class ButtonWithTipComponent {

  @Input() bSize: IButtonSize = 'middle';
  @Input() tipContent: string = '';
  showTip = false;

  moveToBtn() {
    this.showTip = true;
  }

  leaveToBtn() {
    this.showTip = false;
  }

}

export type IButtonSize = 'small' | 'middle' | 'big';

