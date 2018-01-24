import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../../shared/services/app.service';

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
  confirmVisible: boolean = false;
  editElementVisible: boolean = false;

  title: string = 'Element';
  selector: string = '';
  properties: any = {id: '', cssClass: '', html: ''};
  attributes: any = {};

  @ViewChild('editFrame') el: ElementRef;

  constructor (private _sanitizer: DomSanitizer, private _appService: AppService, private _router: Router,  private _route: ActivatedRoute) {
    // (<any>window).configurePlugin = this.configurePlugin.bind(this);
  }

  /**
   * Init pages
   *
   */
  ngOnInit() {

    var editMode, fullPageUrl;

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
    this.confirmVisible = false;
    this.editElementVisible = false;
  }

  /**
   * navigates back
   */
  back() {

    this.confirmVisible = true;
    
  }

  /**
   * Calls save in the editor
   */
  save() {

    // show menu in the editor
    this.el.nativeElement.contentWindow.hashedit.save();

    this._appService.showToast('success', null);

  }

  /**
   * Calls save in the editor
   */
  update(obj) {

    console.log('object!');
    console.log(obj);

    // show menu in the editor
    this.el.nativeElement.contentWindow.hashedit.update(obj)

    console.log('after update()');

    // reset
    this.reset();

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

  /**
   * Cancels navigation
   */
  cancelNavigation() {
    this.confirmVisible = false;
    return true;
  }

  /**
   * Continues navigation
   */
  continueNavigation() {
    this.confirmVisible = false;
    this._router.navigate(['/pages']);
  }

  @HostListener("window:message",["$event"])
  configurePlugin($event:MessageEvent) {

    let data = $event.data;

    // look for element in message
    if(data.properties) {

      this.title = data.title;
      this.selector = data.selector;
      this.properties = data.properties;

      // set attributes if available
      if(data.attributes != null && data.attributes != undefined) {
        this.attributes = data.attributes;
      }
    
      // set visible
      this.editElementVisible = true;
    }
    
  }
  


}