import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ChickenSoupService} from "./service/chicken-soup.service";
import {TopContextGenerator} from "./service/TopContextGenerator";
import {EnvironmentConfigService} from "./service/environment-config.service";
import {LoginService} from "./service/login.service";
import {UserInfo} from "./singleton/UserInfo";
import {User} from "./entity/User";
import {ProductDAOService} from "./service/product-dao.service";

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
  
  isUseMockData = false;
  user: User = new User(0, 'unknow');

  constructor(
    private router: Router,
    private chickenSoupService: TopContextGenerator,
    private environmentConfigService: EnvironmentConfigService,
    private loginService: LoginService,
    private productDAOService: ProductDAOService) {
  }

  ngOnInit() {
    this.setAChickenSoup();
    this.isUseMockData = this.environmentConfigService.getUseMockData();
    const user = UserInfo.getInstance().user;
    if(user) {
      this.user = user;
    }
  }

  goToHomePage() {
    this.router.navigateByUrl('').then(() => {
    });
  }

  setAChickenSoup() {
    this.chickenSoup = this.chickenSoupService.getOneContext();
  }

  toggleUseMockData() {
    this.environmentConfigService.toggleUseMockData();
    this.isUseMockData = this.environmentConfigService.getUseMockData();
  }

  async login() {
    try {
      const jwt= await this.loginService.getJWT('xxxxxx@gmail.com', '11111111');
      UserInfo.getInstance().setUserFromJWT(jwt);
      const user = UserInfo.getInstance().user;
      if (user) {
        this.user = user;
      }
    } catch (err) {
      console.error("login 失敗");
    }
  }

  logout() {
    UserInfo.getInstance().setUserWhenLogout();
    this.user = new User(0, 'unknow');
  }

  async addProduct() {
    if (this.user) {
      try {
        await this.productDAOService.addNewProduct(this.user.jwt);
      } catch (err) {
        console.error("addProduct has error");
      }
    }
    
  }
}
