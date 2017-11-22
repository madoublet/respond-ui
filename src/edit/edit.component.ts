import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../shared/services/app.service';

@Component({
    selector: 'respond-edit',
    templateUrl: 'edit.component.html',
    providers: [AppService]
})

export class EditComponent {

  url: SafeResourceUrl;
  drawerVisible: boolean = false;

  @ViewChild('editFrame') el: ElementRef;

  constructor (private _sanitizer: DomSanitizer, private _appService: AppService) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    var editMode, fullPageUrl;

    this.drawerVisible = false;

    this.id = localStorage.getItem('respond.siteId');
    this.pageUrl = localStorage.getItem('respond.pageUrl');
    editMode = localStorage.getItem('respond.editMode');

    this.buildUrl();

    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('/edit?q=' + this.id + '/' + this.pageUrl + '&mode=' + editMode);

  }

  /**
   * Get the url for the page
   */
  buildUrl() {
    
        this.hasAccount = (localStorage.getItem('site_has_account') == 'true'); // convert to boolean
        
        // retrieve settings
        this._appService.retrieveSettings()
                         .subscribe(
                           data => {
                             this.siteUrl = data.siteUrl;
                             this.siteUrl = this.siteUrl.replace('{{siteId}}', this.id);
                             this.fullPageUrl = this.siteUrl + '/' + this.pageUrl + '.html';
                           },
                           error =>  { }
                          );
      }

    /**
   * Resets an modal booleans
   */
  reset() {
    this.drawerVisible = false;
  }

  /**
   * navigates back
   */
  back() {
    history.go(-1);
  }

  save() {

    // show menu in the editor
    this.el.nativeElement.contentWindow.hashedit.save();

    this._appService.showToast('success', null);

  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Shows the add menu
   */
  showAdd() {

    // show menu in the editor
    this.el.nativeElement.contentWindow.hashedit.showMenu();

  }

   /**
   * Shows the page
   */
  showPage() {
    window.open(this.fullPageUrl, '_blank');
  }


}