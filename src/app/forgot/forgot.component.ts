import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-forgot',
    templateUrl: 'forgot.component.html',
    providers: [UserService, AppService]
})

export class ForgotComponent {

  data;
  errorMessage;
  logoUrl;
  hasMultipleSites = false;

  constructor (private _userService: UserService, private _appService: AppService, private _route: ActivatedRoute) {}

  ngOnInit() {

      this.logoUrl = '';

      // retrieve settings
      this.settings();
  }

  /**
   * Get settings
   */
  settings() {

    // list themes in the app
    this._appService.retrieveSettings()
                     .subscribe(
                       data => {
                         this.logoUrl = data.logoUrl;
                       },
                       error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * Submit forgot request
   */
  forgot(event, email){

      event.preventDefault();

      this._userService.forgot(email)
                   .subscribe(
                     () => { this._appService.showToast('success', null); },
                     error =>  { this.failure(<any>error); }
                    );

  }

  /**
   * handles errors
   */
  failure(obj) {

    this._appService.showToast('failure', obj._body);

    if(obj.status == 409) {
      this.hasMultipleSites = true;
    }

  }


}