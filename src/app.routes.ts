import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { ForgotComponent } from './app/forgot/forgot.component';
import { ResetComponent } from './app/reset/reset.component';
import { CreateComponent } from './app/create/create.component';
import { PagesComponent } from './app/pages/pages.component';
import { ComponentsComponent } from './app/components/components.component';
import { FilesComponent } from './app/files/files.component';
import { PluginsComponent } from './app/plugins/plugins.component';
import { UsersComponent } from './app/users/users.component';
import { MenusComponent } from './app/menus/menus.component';
import { FormsComponent } from './app/forms/forms.component';
import { SettingsComponent } from './app/settings/settings.component';
import { SubmissionsComponent } from './app/submissions/submissions.component';
import { GalleriesComponent } from './app/galleries/galleries.component';
import { EditComponent } from './app/edit/edit.component';
import { AdvancedComponent } from './app/advanced/advanced.component';
import { AccountComponent } from './app/account/account.component';
import { CodeComponent } from './app/code/code.component';
import { environment } from './environments/environment';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/:id',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'forgot/:id',
    component: ForgotComponent
  },
  {
    path: 'reset/:id/:token',
    component: ResetComponent
  },
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'files',
    component: FilesComponent
  },
  {
    path: 'plugins',
    component: PluginsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'menus',
    component: MenusComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: 'galleries',
    component: GalleriesComponent
  },
  {
    path: 'edit/:id/:mode',
    component: EditComponent
  },
  {
    path: 'advanced',
    component: AdvancedComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'code/:id',
    component: CodeComponent
  }
  /*{
    path: 'products',
    loadChildren: 'app/pro/pro.module#ProModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }*/
];

// push pro routes
if(environment.build == 'pro') {
  appRoutes.push(
    {
      path: 'products',
      loadChildren: 'app/pro/pro.module#ProModule'
    });
}

// push redirect route
appRoutes.push(
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  });

export const routing = RouterModule.forRoot(appRoutes);