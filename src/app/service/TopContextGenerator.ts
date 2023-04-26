import {Injectable} from "@angular/core";

@Injectable()
export abstract class  TopContextGenerator {
    abstract getOneContext(): string;
}