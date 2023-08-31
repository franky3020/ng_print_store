import { Component, OnInit } from '@angular/core';
import { ProductDAOService } from '../../service/product-dao.service';
import { Product } from '../../entity/Product';
import { UserDaoService } from '../../service/user-dao.service';
import { UserInfo } from '../../singleton/UserInfo';
import { User } from '../../entity/User';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  user: User = new User(0, 'unknown');

  pageDestroy: Subject<void> = new Subject<void>();

  constructor(
    private productDAOService: ProductDAOService,
    private userDaoService: UserDaoService,
  ) {
    this.getProduct();
    this.productDAOService.updateProductSubject
      .pipe(takeUntil(this.pageDestroy))
      .subscribe(() => {
        this.getProduct();
      });

    UserInfo.getInstance()
      .updateUserDataSubject.pipe(takeUntil(this.pageDestroy))
      .subscribe(() => {
        this.updateUserInfo();
      });
  }

  ngOnInit(): void {
    this.updateUserInfo();
  }

  updateUserInfo() {
    const user = UserInfo.getInstance().user;
    if (user) {
      this.user = user;
    } else {
      this.user = new User(0, 'unknown');
    }
  }

  ngOnDestroy(): void {
    if (this.pageDestroy) {
      this.pageDestroy.next();
      this.pageDestroy.complete();
    }
  }

  async getProduct() {
    // TODO: 需檢查有無更新 無則不需要刷新 所以API需要有更新時間
    this.products = await this.productDAOService.getProducts();
  }

  doSomeThing() {
    // 先為空
  }

  async clickDeleteBtn(id: number) {
    if (this.user) {
      try {
        await this.productDAOService.deleteProduct(id, this.user.jwt);
      } catch (err) {
        console.error('addProduct has error');
      }
    }
  }
}
