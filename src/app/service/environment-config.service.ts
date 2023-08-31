import { Injectable } from '@angular/core';
import { environment } from '../../environment';

const useMockDataLocalStorageKey = 'useMockDataLocalStorageKey';
@Injectable({
  providedIn: 'root',
})
export class EnvironmentConfigService {
  private useMockData: boolean;

  constructor() {
    this.useMockData = environment.useMockData;
    let isUseMockDate = localStorage.getItem(useMockDataLocalStorageKey);
    if (isUseMockDate === null) {
      localStorage.setItem(
        useMockDataLocalStorageKey,
        String(this.useMockData),
      );
    } else {
      this.useMockData = isUseMockDate === 'true';
    }
  }

  toggleUseMockData(): void {
    this.useMockData = !this.useMockData;
    localStorage.setItem(useMockDataLocalStorageKey, String(this.useMockData));
  }

  getUseMockData(): boolean {
    return this.useMockData;
  }
}
