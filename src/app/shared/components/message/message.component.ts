import { Component, Renderer, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../../shared/services/site.service';
import { AppService } from '../../../shared/services/app.service';

@Component({
    selector: 'respond-message',
    templateUrl: 'message.component.html',
    providers: [SiteService, AppService]
})

export class MessageComponent {

  globalListener: any;

  showMessage: boolean = false;
  canNavigate: boolean = false;
  status: string;
  messageColor: string;
  messageText: string;
  messageLink: string;

  constructor (private _siteService: SiteService, private _appService: AppService, private renderer: Renderer) {}

  /**
   * Init pages
   */
  ngOnInit() {
    this.status = 'active';

    // get app settings
    this.init();
  }

  /**
   * Get settings
   */
  public init() {

    // set trial information
    this.status = localStorage.getItem('site_status');
    
    this.messageColor = localStorage.getItem('message_color') || 'None';
    this.messageText = localStorage.getItem('message_text') || '';
    this.messageLink = localStorage.getItem('message_link') || '';

    // set body attribute
    if(this.messageColor.toUpperCase() != 'NONE') {
      this.showMessage = true;
      document.body.setAttribute('show-status', '');
    }
    else {
      this.showMessage = false;
      document.body.removeAttribute('show-status');
    }

    if(this.messageLink != '') {
      this.canNavigate = true;
    }
    else {
      this.canNavigate = false;
    }
  }

  /**
   * Navigate to the message link
   */
  navigate() {

    // open in a new window
    if(this.messageLink != '') {
      window.open(this.messageLink, '_blank');
    }


  }

}