import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-reset',
    templateUrl: 'reset.component.html',
    providers: [UserService, AppService]
})

export class ResetComponent {

  data;
  token;
  errorMessage;
  logoUrl;

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
   * Reset the password
   */
  reset(event, password, retype){

      event.preventDefault();

      if(password !== retype) {
        this._appService.showToast('failure', 'Password mismatch');
      }
      else {
        this._userService.reset(this.token, password)
                     .subscribe(
                       () => { this._appService.showToast('success', null); },
                       error =>  { this.failure(<any>error); }
                      );
      }

  }

  /**
   * handles error
   */
  failure (obj) {

    this._appService.showToast('failure', obj._body);

  }


}