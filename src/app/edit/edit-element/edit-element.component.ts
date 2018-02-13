import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../../shared/services/form.service';
import { GalleryService } from '../../shared/services/gallery.service';
import { PageService } from '../../shared/services/page.service';
import { ComponentService } from '../../shared/services/component.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'respond-edit-element',
    templateUrl: 'edit-element.component.html',
    providers: [FormService, GalleryService, PageService, ComponentService, ProductService]
})

export class EditElementComponent {

  isExpanded: boolean = true;
  isHtmlExpanded: boolean = false;
  showRemove: boolean = false;

  // lists
  forms: any = [];
  galleries: any = [];
  pages: any = [];
  components: any = [];
  products: any = [];

  // set model
  model: any = {
      id: '',
      cssClass: '',
      textColor: '',
      textAlignment: '',
      textShadowColor: '',
      textShadowHorizontal: '',
      textShadowVertical: '',
      textShadowBlur: '',
      html: ''
    };

  // model to store
  _title: string = 'Element';
  _selector: string = null;
  _properties: any = {
                        id: '',
                        cssClass: '',
                        html: ''
                      };
  _attributes: any = [];

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  get visible() { return this._visible; }

  @Input()
  set properties(properties: any){

    // reset model
    this._properties = properties;

    // set model
    this.model.id = properties.id;
    this.model.cssClass = properties.cssClass;
    this.model.textColor = properties.textColor;
    this.model.textAlignment = properties.textAlignment;
    this.model.html = properties.html;

    this.model.textShadowColor = properties.textShadowColor;
    this.model.textShadowHorizontal = properties.textShadowHorizontal;
    this.model.textShadowVertical = properties.textShadowVertical;
    this.model.textShadowBlur = properties.textShadowBlur;

    this.reset();

  }

  get properties() { return this._properties; }

  @Input()
  set attributes(attributes: any){

    // walk through attributs
    for(let x=0; x<attributes.length; x++) {

      // check for values
      if(attributes[x].values != null && attributes[x].values != undefined) {

          // make sure a value exists
          if(attributes[x].values.length > 0) {

            // inject forms
            if(attributes[x].values[0] == 'respond.forms') {
              attributes[x].type = 'form';
              this.listForms();
            }
            else if(attributes[x].values[0] == 'respond.galleries') {
              attributes[x].type = 'gallery';
              this.listGalleries();
            } 
            else if(attributes[x].values[0] == 'respond.pages') {
              attributes[x].type = 'page';
              this.listPages();
            } 
            else if(attributes[x].values[0] == 'respond.components') {
              attributes[x].type = 'component';
              this.listComponents();
            } 
            else if(attributes[x].values[0] == 'respond.products') {
              attributes[x].type = 'product';
              this.listProducts();
            } 
          }

      } 

    }


    // reset model
    this._attributes = attributes;

  }

  get attributes() { return this._attributes; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onCommand = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _formService: FormService, private _gallerySerivce: GalleryService, private _pageService: PageService, private _componentService: ComponentService, private _productService: ProductService) {}

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
   * Resets any transitional states
   */
  reset() {
    this.showRemove = false;
    this.isHtmlExpanded = false;
  }

  /**
   * Submits the form
   */
  submit() {
    this.onUpdate.emit({type: 'element', properties: this.model, attributes: this._attributes});
  }

  /**
   * lists the forms
   */
  listForms() {
    this._formService.list()
                     .subscribe(
                       data => { this.forms = data; },
                       error =>  { }
                      );
  }

  /**
   * lists the galleries
   */
  listGalleries() {
    this._gallerySerivce.list()
                     .subscribe(
                       data => { this.galleries = data; },
                       error =>  { }
                      );
  }

  /**
   * lists the pages
   */
  listPages() {
    this._pageService.list()
                     .subscribe(
                       data => { this.pages = data; },
                       error =>  { }
                      );
  }

  /**
   * lists the components
   */
  listComponents() {
    this._componentService.list()
                     .subscribe(
                       data => { this.components = data; },
                       error =>  { }
                      );
  }

  /**
   * lists the components
   */
  listProducts() {
    this._productService.list()
                     .subscribe(
                       data => { this.products = data; },
                       error =>  { }
                      );
  }

  /**
   * toggle expanded
   */
  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  /**
   * toggle expanded
   */
  toggleHtml() {
    this.isHtmlExpanded = !this.isHtmlExpanded;
  }

  /**
   * set model.alignment
   */
  setAlignment(alignment:string) {
    this.model.textAlignment = alignment;
    this.submit();
  }

  /**
   * toggle the show remove headline
   */
  toggleShowRemove() {
    this.showRemove = !this.showRemove;
  }

  /**
   * send command to remove element
   */
  remove() {
    this.onCommand.emit('element.remove');
    this.showRemove = false;
  }

  /**
   * resets the styles on text shadow
   */
  resetTextShadow() {

    this.model.textShadowColor = '';
    this.model.textShadowHorizontal = '';
    this.model.textShadowVertical = '';
    this.model.textShadowColor = '';
    this.model.textShadowBlur = '';

    this.submit();
  }

  /**
   * resets the styles on text shadow
   */
  resetTextColor() {

    this.model.textColor = '';

    this.submit();
  }

}