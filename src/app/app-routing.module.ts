import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DemoComponentPageComponent } from './page/demo-component-page/demo-component-page.component';
import { TestMatterJsPageComponent } from './page/test-matter-js-page/test-matter-js-page.component';

// 命名要對應 component 名稱
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'demo-component-page',
    component: DemoComponentPageComponent,
  },
  {
    path: 'test-matter-js-page',
    component: TestMatterJsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
