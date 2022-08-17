import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { childRoutes } from './admin/child-routes';
import { LayoutComponent } from './admin/layout/layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childRoutes
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
