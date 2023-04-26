import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChickenSoupService} from "./service/chicken-soup.service";
import {TopContextGenerator} from "./service/TopContextGenerator";
@Component({
  selector: 'app-root',
  providers: [
    {
      provide: TopContextGenerator,
      useClass: ChickenSoupService
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_print_store';

  chickenSoup = '';

  constructor(
      private router: Router,
      private chickenSoupService: TopContextGenerator) {
  }

  ngOnInit() {
    this.setAChickenSoup();
  }

  goToHomePage() {
    this.router.navigateByUrl('').then(() => {});
  }

  setAChickenSoup() {
    this.chickenSoup = this.chickenSoupService.getOneContext();
  }
}
