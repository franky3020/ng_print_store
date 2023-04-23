import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChickenSoupService {

  constructor() { }

  getPrimaryOne() {

    if (this.isAfternoon()) {
      return "但凡精緻好看的，都是暗地裡下過功夫的";
    } else {
      return "下午了 不需要心靈雞湯了";
    }

  }

  isAfternoon() {
    let date = new Date();
    return date.getHours() > 12;
  }


}
