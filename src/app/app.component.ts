import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ChickenSoupService} from "./service/chicken-soup.service";
import {TopContextGenerator} from "./service/TopContextGenerator";
import {EnvironmentConfigService} from "./service/environment-config.service";

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
export class AppComponent implements OnInit {
  title = 'ng_print_store';

  chickenSoup = '';

  constructor(
    private router: Router,
    private chickenSoupService: TopContextGenerator,
    private environmentConfigService: EnvironmentConfigService) {
  }

  ngOnInit() {
    this.setAChickenSoup();
  }

  goToHomePage() {
    this.router.navigateByUrl('').then(() => {
    });
  }

  setAChickenSoup() {
    this.chickenSoup = this.chickenSoupService.getOneContext();
  }

  test() {
    this.environmentConfigService.toggleUseMockData();
    console.log("this.environmentConfigService.getUseMockData()");
    console.log(this.environmentConfigService.getUseMockData());
  }
}
