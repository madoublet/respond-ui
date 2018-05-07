import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../shared/services/site.service';
import { AppService } from 'app/shared/services/app.service';

@Component({
    selector: 'respond-site-settings',
    templateUrl: 'site-settings.component.html',
    providers: [SiteService, AppService]
})

export class SiteSettingsComponent {

  // model to store
  model: any = {
    id: '',
    name: '',
    email: '',
    status: '',
    messageColor: '',
    messageText: '',
    messageLink: ''
  };

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  @Input()
  set site(site){

    console.log(site);

    // set visible
    this.model = {
      id: site.id,
      name: site.name,
      email: site.email,
      status: site.status || 'active',
      messageColor: site.messageColor || 'none',
      messageText: site.messageText,
      messageLink: site.messageLink
    };

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _siteService: SiteService, private _appService: AppService) {}

  /**
   * Init
   */
  ngOnInit() {
  }


  /**
   * Hides the add component modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Submits the form
   */
  submit() {

    this._siteService.update(this.model.id, this.model.name, this.model.email, this.model.status, this.model.messageColor, this.model.messageText, this.model.messageLink)
                     .subscribe(
                      (data: any) => { this.success(); },
                       error =>  { this.onError.emit(<any>error); }
                      );

  }

  /**
   * Handles a successful add
   */
  success() {
    this._visible = false;
    this.onUpdate.emit(null);
  }

  /**
   * handles errors
   */
  failure(obj) {

    console.log('settings failure');
    console.log(obj);

    this._appService.showToast('failure', obj.error);
  }

}