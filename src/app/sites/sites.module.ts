import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SitesRoutingModule
  ],
  declarations: [SitesComponent, AddSiteComponent]
})
export class SitesModule { }
