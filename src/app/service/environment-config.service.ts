import { Injectable } from '@angular/core';
import {environment} from "../../environment";
@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService {

  private useMockData: boolean;
  

  constructor() {
    this.useMockData = environment.useMockData;
  }
  
  toggleUseMockData(): void {
    this.useMockData = !this.useMockData;
  }
  
  getUseMockData(): boolean {
    return this.useMockData;
  }
  
  
}
