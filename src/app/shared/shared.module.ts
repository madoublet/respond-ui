import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { RouterModule, Router } from '@angular/router';


@NgModule({
  declarations: [
    DrawerComponent, 
    ConfirmComponent,
    SubscribeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    DrawerComponent,
    SubscribeComponent,
    ConfirmComponent
  ]
})
export class SharedModule { }
