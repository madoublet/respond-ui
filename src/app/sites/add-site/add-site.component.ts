import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../shared/services/site.service';
import { AppService } from 'app/shared/services/app.service';

@Component({
    selector: 'respond-add-site',
    templateUrl: 'add-site.component.html',
    providers: [SiteService, AppService]
})

export class AddSiteComponent {

  // model to store
  model: any;
  themes:any = [];

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

    // reset model
    this.model = {
      name: '',
      theme: ''
    };

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _siteService: SiteService, private _appService: AppService) {}

  /**
   * Init
   */
  ngOnInit() {

    this.model = {
      name: '',
      theme: ''
    };

    this.list();

  }

   /**
   * Updates the list
   */
  list() {

    // list themes in the app
    this._appService.listThemes()
                     .subscribe(
                      (data: any) => {
                         this.themes = data;
                       },
                       error =>  { this.failure(<any>error); }
                      );
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

    this._siteService.add(this.model.name, this.model.theme)
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
    this.onAdd.emit(null);
  }

  /**
   * handles errors
   */
  failure(obj) {
    this._appService.showToast('failure', obj.error);
  }

}