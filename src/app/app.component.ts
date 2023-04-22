import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_print_store';

  constructor(private router: Router,) {
  }
  goToHomePage() {
    this.router.navigateByUrl('').then(() => {});
  }
}
