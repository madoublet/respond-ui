import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../../../shared/services/site.service';
import { RouteService } from '../../../../shared/services/route.service';

@Component({
    selector: 'respond-unsubscribe',
    templateUrl: 'unsubscribe.component.html',
    providers: [SiteService, RouteService]
})

export class UnsubscribeComponent {

  routes;
  errorMessage;


  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _siteService: SiteService, private _routeService: RouteService) {}

  /**
   * Init pages
   */
  ngOnInit() {

  }

  /**
   * Hides the modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Submits the form
   */
  submit() {

    this._siteService.unsubscribe()
                        .subscribe(
                          data => { this.success(); },
                          error =>  { this.onError.emit(<any>error); }
                        );
    
  }

  /**
   * Handles a successful submission
   */
  success() {

    localStorage.setItem('site_status', 'Active');
    localStorage.setItem('site_has_account', 'false');

    this._visible = false;
    this.onUpdate.emit(null);

  }


}