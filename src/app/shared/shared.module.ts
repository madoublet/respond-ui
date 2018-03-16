import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MessageComponent } from './components/message/message.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SelectFileComponent } from './components/files/select-file/select-file.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DrawerComponent, 
    ConfirmComponent,
    MessageComponent,
    SelectFileComponent,
    DropzoneComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    DrawerComponent,
    MessageComponent,
    ConfirmComponent,
    SelectFileComponent,
    DropzoneComponent
  ]
})
export class SharedModule { }
