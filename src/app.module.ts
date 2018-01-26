import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// forms
import { FormsModule } from '@angular/forms';

// router
import { RouterModule, Router } from '@angular/router';

// app component
import { AppComponent }   from './app.component';

// sortable
import { SortablejsModule } from 'angular-sortablejs';

// http
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// common
import { DropzoneComponent } from './app/shared/components/dropzone/dropzone.component';

// logon, forgot, reset, create
import { LoginComponent } from './app/login/login.component';
import { ForgotComponent } from './app/forgot/forgot.component';
import { ResetComponent } from './app/reset/reset.component';
import { CreateComponent } from './app/create/create.component';

// advanced + code  + account
import { AdvancedComponent } from './app/advanced/advanced.component';
import { CodeComponent } from './app/code/code.component';
import { AddCodeComponent } from './app/shared/components/code/add-code/add-code.component';

// account
import { AccountComponent } from './app/account/account.component';
import { UnsubscribeComponent } from './app/shared/components/account/unsubscribe/unsubscribe.component';

// edit
import { EditComponent } from './app/edit/edit/edit.component';
import { EditElementComponent } from './app/edit/edit-element/edit-element.component';
import { EditBlockComponent } from './app/edit/edit-block/edit-block.component';
import { EditImageComponent } from './app/edit/edit-image/edit-image.component';
import { EditLinkComponent } from './app/edit/edit-link/edit-link.component';

// files
import { FilesComponent } from './app/files/files.component';
import { RemoveFileComponent } from './app/shared/components/files/remove-file/remove-file.component';
import { SelectFileComponent } from './app/shared/components/files/select-file/select-file.component';

// plugins
import { PluginsComponent } from './app/plugins/plugins.component';
import { RemovePluginComponent } from './app/shared/components/plugins/remove-plugin/remove-plugin.component';

// forms
import { FormsComponent } from './app/forms/forms.component';
import { AddFormComponent } from './app/shared/components/forms/add-form/add-form.component';
import { EditFormComponent } from './app/shared/components/forms/edit-form/edit-form.component';
import { RemoveFormComponent } from './app/shared/components/forms/remove-form/remove-form.component';
import { AddFormFieldComponent } from './app/shared/components/forms/add-form-field/add-form-field.component';
import { EditFormFieldComponent } from './app/shared/components/forms/edit-form-field/edit-form-field.component';
import { RemoveFormFieldComponent } from './app/shared/components/forms/remove-form-field/remove-form-field.component';

// galleries
import { GalleriesComponent } from './app/galleries/galleries.component';
import { AddGalleryComponent } from './app/shared/components/galleries/add-gallery/add-gallery.component';
import { EditGalleryComponent } from './app/shared/components/galleries/edit-gallery/edit-gallery.component';
import { RemoveGalleryComponent } from './app/shared/components/galleries/remove-gallery/remove-gallery.component';
import { EditCaptionComponent } from './app/shared/components/galleries/edit-caption/edit-caption.component';
import { RemoveGalleryImageComponent } from './app/shared/components/galleries/remove-gallery-image/remove-gallery-image.component';

// menus
import { MenusComponent } from './app/menus/menus.component';
import { AddMenuComponent } from './app/shared/components/menus/add-menu/add-menu.component';
import { EditMenuComponent } from './app/shared/components/menus/edit-menu/edit-menu.component';
import { RemoveMenuComponent } from './app/shared/components/menus/remove-menu/remove-menu.component';
import { AddMenuItemComponent } from './app/shared/components/menus/add-menu-item/add-menu-item.component';
import { EditMenuItemComponent } from './app/shared/components/menus/edit-menu-item/edit-menu-item.component';
import { RemoveMenuItemComponent } from './app/shared/components/menus/remove-menu-item/remove-menu-item.component';

// pages
import { PagesComponent } from './app/pages/pages.component';
import { AddPageComponent } from './app/shared/components/pages/add-page/add-page.component';
import { PageSettingsComponent } from './app/shared/components/pages/page-settings/page-settings.component';
import { RemovePageComponent } from './app/shared/components/pages/remove-page/remove-page.component';
import { SelectPageComponent } from './app/shared/components/pages/select-page/select-page.component';

// component
import { ComponentsComponent } from './app/components/components.component';
import { AddComponentComponent } from './app/shared/components/components/add-component/add-component.component';
import { RemoveComponentComponent } from './app/shared/components/components/remove-component/remove-component.component';

// settings
import { SettingsComponent } from './app/settings/settings.component';

// submissions
import { SubmissionsComponent } from './app/submissions/submissions.component';
import { RemoveSubmissionComponent } from './app/shared/components/submissions/remove-submission/remove-submission.component';
import { ViewSubmissionComponent } from './app/shared/components/submissions/view-submission/view-submission.component';

// users
import { UsersComponent } from './app/users/users.component';
import { AddUserComponent } from './app/shared/components/users/add-user/add-user.component';
import { EditUserComponent } from './app/shared/components/users/edit-user/edit-user.component';
import { RemoveUserComponent } from './app/shared/components/users/remove-user/remove-user.component';

// routing
import { routing } from './app.routes';

// translate
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

// pipes
import { TimeAgoPipe } from './app/shared/pipes/time-ago.pipe';

// modules
import { SharedModule } from './app/shared/shared.module';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      ForgotComponent,
      ResetComponent,
      CreateComponent,
      DropzoneComponent,
      EditComponent, EditElementComponent, EditBlockComponent, EditImageComponent, EditLinkComponent,
      AdvancedComponent, CodeComponent, AddCodeComponent, AccountComponent, UnsubscribeComponent,
      FilesComponent, RemoveFileComponent, SelectFileComponent, PluginsComponent, RemovePluginComponent,
      FormsComponent, AddFormComponent, EditFormComponent, RemoveFormComponent, AddFormFieldComponent, EditFormFieldComponent, RemoveFormFieldComponent,
      GalleriesComponent, AddGalleryComponent, EditGalleryComponent, RemoveGalleryComponent, EditCaptionComponent, RemoveGalleryImageComponent,
      MenusComponent, AddMenuComponent, EditMenuComponent, RemoveMenuComponent, AddMenuItemComponent, EditMenuItemComponent, RemoveMenuItemComponent,
      PagesComponent, AddPageComponent, PageSettingsComponent, RemovePageComponent, SelectPageComponent,
      ComponentsComponent, AddComponentComponent, RemoveComponentComponent,
      SettingsComponent,
      SubmissionsComponent, RemoveSubmissionComponent, ViewSubmissionComponent,
      UsersComponent, AddUserComponent, EditUserComponent, RemoveUserComponent,
      TimeAgoPipe ],
    imports: [
      SharedModule,
      BrowserModule,
      FormsModule,
      RouterModule,
      routing,
      HttpModule,
      HttpClientModule,
      TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
      SortablejsModule.forRoot({
        animation: 200
        }),
      ],
    bootstrap: [ AppComponent ],
    providers: [ TranslateService ]
})

export class AppModule {}