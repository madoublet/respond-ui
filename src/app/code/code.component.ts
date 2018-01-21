import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeService } from '../shared/services/code.service';
import { AppService } from '../shared/services/app.service';

declare var ace: any;

@Component({
    selector: 'respond-code',
    templateUrl: 'code.component.html',
    providers: [CodeService, AppService],
})

export class CodeComponent {

  id: string;
  code: string;
  codeUrl: string;
  codeType: string = 'not-specified';
  editor: any;
  pages: any;
  templates: any;
  stylesheets: any;
  scripts: any;
  plugins: any;
  components: any;
  files: any;
  showMenu: boolean;
  addVisible: boolean = false;
  drawerVisible: boolean = false;
  path: string = '/';
  confirmVisible: boolean = false;

  constructor (private _route: ActivatedRoute, private _router: Router, private _codeService: CodeService, private _appService: AppService) {}

  /**
   * init
   */
  ngOnInit() {

    var id, codeUrl;

    id = localStorage.getItem('respond.siteId');

    this.codeUrl = localStorage.getItem('respond.codeUrl');
    this.codeType = localStorage.getItem('respond.codeType');
    this.showMenu = true;
    this.addVisible = false;
    this.drawerVisible = false;

    // get types
    this.files = [];

    if(this.codeType == 'page' || this.codeType == 'component') {
      this.showMenu = false;
    }
    else {
      this.list();
    }

    this.retrieve();

  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Resets modal booleans
   */
  reset() {
    this.addVisible = false;
  }

  /**
   * Navigates back
   */
  back() {
    this.confirmVisible = true; 
  }

  /**
   * Updates the list
   */
  retrieve() {

    this._codeService.retrieve(this.codeUrl)
                     .subscribe(
                       data => { this.setupEditor(data); },
                       error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * Views a code block
   */
  view(type, url) {
    this.codeType = type;
    this.codeUrl = url;
    this.retrieve();
  }

  /**
   * Shows the folder
   */
  showFolder(path) {

    this.path = this.path + path + '/';
    this.list();

  }

  /**
   * Go up a directory
   */
  up() {

    let arr = this.path.split('/').filter(function(el) {return el.length != 0}), 
              str = '';

    // pop the last one off to move up          
    arr.pop();

    // rejoin with /
    str = '/' + arr.join('/');

    this.path = str;
    this.list();

  }

  /**
   * Shows the file
   */
  showFile(path, isEditable) {

    if(isEditable == true) {

      this.codeUrl = this.path + path;
      this.retrieve();

    }
    
  }

  /**
   * Updates the list
   */
  list() {

    this.reset();

    this._codeService.listFiles(this.path)
                      .subscribe(
                        data => { this.files = data; },
                        error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * setup the ace editor
   */
  setupEditor(data) {

    this.editor = ace.edit("editor");

    if(this.codeType == "page") {
       this.editor.getSession().setMode("ace/mode/html");
    }
    else if(this.codeType == "stylesheet") {
       this.editor.getSession().setMode("ace/mode/css");
    }
    else if(this.codeType == "script") {
       this.editor.getSession().setMode("ace/mode/javascript");
    }
    else if(this.codeType == "plugin") {
       this.editor.getSession().setMode("ace/mode/php");
    }
    else {
       this.editor.getSession().setMode("ace/mode/html");
    }

    this.editor.setValue(data);
    this.editor.setTheme("ace/theme/chrome");
    this.editor.blur();
    this.editor.session.selection.clearSelection();

  }

  /**
   * handles error
   */
  failure(obj) {

    this._appService.showToast('failure', obj._body);

    if(obj.status == 401) {
    //  this._router.navigate( ['/login'] );
    }

  }

  /**
   * Handles a successful save
   */
  success() {

    this._appService.showToast('success', null);

  }

  /**
   * Save the code
   */
  save() {

    // save code from the editor
    this._codeService.save(this.editor.getValue(), this.codeUrl)
                     .subscribe(
                       data => { this.success(); this.list(); },
                       error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * Shows the add dialog
   */
  showAdd() {
    this.addVisible = true;
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
    history.go(-1);
  }

}