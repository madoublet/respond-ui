import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
  id: string;
  pageUrl: string;
  siteUrl: string;
  fullPageUrl: string;
  mode: string = 'page';

  @ViewChild('editFrame') el: ElementRef;

  constructor (private _sanitizer: DomSanitizer, private _appService: AppService, private _router: Router,  private _route: ActivatedRoute) {}

  /**
   * Init pages
   *
   */
  ngOnInit() {

    var editMode, fullPageUrl;

    this.drawerVisible = false;

    this.id = localStorage.getItem('respond.siteId');
    this.pageUrl = localStorage.getItem('respond.pageUrl');
    
    this._route.params.subscribe(params => {
      this.mode = params['mode'];
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl('/edit?q=' + this.id + '/' + this.pageUrl + '&mode=' + this.mode);
    });

    this.buildUrl();

    

  }

  /**
   * Get the url for the page
   */
  buildUrl() {
    
        // retrieve settings
        this._appService.retrieveSettings()
                         .subscribe(
                           data => {
                             this.siteUrl = data.siteUrl;
                             this.siteUrl = this.siteUrl.replace('{{siteId}}', this.id);
                             this.fullPageUrl = this.siteUrl + '/' + this.pageUrl;
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

  /**
   * Navigates to the focused mode
   */
  showFocused() {
    
    if(this.mode == 'page') {
      var id = Math.random().toString(36).substr(2, 9);
      this._router.navigate( ['/edit',  id, 'focused'] );
    }
    else {
      var id = Math.random().toString(36).substr(2, 9);
      this._router.navigate( ['/edit',  id, 'page'] );
    }

  }


}