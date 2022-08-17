import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MaterialModule } from './materail-modules/material.module';
import { RouterTab } from './router-tab/router-tab.directive';
import { RouterTabs } from './router-tab/router-tabs.directive';


const _modules = [
  CommonModule,
  MaterialModule
]

const _sharedComponents = [
  PageNotFoundComponent,
  UserCardComponent,
  PostCardComponent,
  RouterTabs,
  RouterTab
]

@NgModule({
  imports: [_modules],
  declarations: [_sharedComponents],
  exports: [
    CommonModule,
    FlexLayoutModule,
    _sharedComponents,
    _modules
  ]
})
export class SharedModule { }
