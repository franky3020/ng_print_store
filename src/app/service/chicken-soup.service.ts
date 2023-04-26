import {Injectable} from '@angular/core';
import {TopContextGenerator} from "./TopContextGenerator";


const softwareQuotes: string[] = [
    "為什麼我們沒有時間把事情做對，卻總有時間把事情砍掉重練？",
    "傻瓜都能寫出電腦能理解的程式。優秀的工程師寫出的是人類能讀懂的程式",
    "任何你寫的程式，超過 6 個月不去看它，當你再度開啓時，看起來都像是別人寫的",
    "最初 90% 的程式消耗了最初 90% 的開發時間…最後 10% 的程式用去了另外 90% 的開發時間",
    "為了理解遞迴（recursion），我們首先要理解的是遞迴",
    "關於布林值最棒的一點是，即使你搞錯了，也只差一個位元",
    "預備，開火，瞄準：這是最快的軟體開發方法。預備，瞄準，瞄準，瞄準，瞄準：這是最慢的軟體開發方法"
]

@Injectable({
    providedIn: 'root'
})
export class ChickenSoupService extends TopContextGenerator {

    constructor() {
        super();
    }

    getOneContext(): string {
        return this.getRandomOne();
    }

    getPrimaryOne() {

        if (this.isAfternoon()) {
            return "為什麼我們沒有時間把事情做對，卻總有時間把事情砍掉重練？";
        } else {
            return "工作進度上越快落後，你就會有越充足的時間趕上";
        }
    }

    getRandomOne() {
        let randomIndex = this.getRandomInt(softwareQuotes.length);
        return softwareQuotes[randomIndex];
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    isAfternoon() {
        let date = new Date();
        return date.getHours() > 12;
    }

}
