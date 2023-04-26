import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class BalancePlanetService {

    constructor() {
    }

    sumEven(numbers: number[]) {

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {

            if (i % 2 === 0) {
                sum = sum + numbers[i];
            }
        }
        return sum;
    }

    sumOdd(numbers: number[]) {

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {

            if (i % 2 === 1) {
                sum = sum + numbers[i];
            }
        }
        return sum;

    }

    getDestroyPlanetIndex(numbers: number[]) {
        for (let i = 0; i < numbers.length; i++) {
            let destroyPlanets = [...numbers];
            destroyPlanets.splice(i, 1);
            if (this.sumEven(destroyPlanets) === this.sumOdd(destroyPlanets)) {
                return i;
            }
        }
        return -1;
    }

    testCopy() {

        const other = {
            other: "franky"
        }

        const target = { a: 1, b: 2, other: other};


        const copyTarget = _.cloneDeep(target);
        copyTarget.a = 777;
        copyTarget.other.other = "test";

        console.log("target: ", target);
        console.log("copyTarget: ", copyTarget);


    }
}
