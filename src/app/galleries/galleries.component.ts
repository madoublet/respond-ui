import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from '../shared/services/gallery.service';
import { GalleryImageService } from '../shared/services/gallery-image.service';
import { AppService } from '../shared/services/app.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
    selector: 'respond-galleries',
    templateUrl: 'galleries.component.html',
    providers: [GalleryService, GalleryImageService, AppService]
})

export class GalleriesComponent {

  id: string;
  role: string;
  galleries;
  images;
  errorMessage;
  selectedGallery;
  selectedImage;
  selectedIndex;
  editImageVisible;
  addVisible: boolean;
  editVisible: boolean;
  removeVisible: boolean;
  selectVisible: boolean;
  removeImageVisible: boolean;
  drawerVisible: boolean;
  overflowVisible: boolean;

  options: SortablejsOptions = {
    handle: '.sortable-handle',
    onUpdate: () => this.updateOrder()
  };

  constructor (private _galleryService: GalleryService, private _galleryImageService: GalleryImageService, private _router: Router, private _appService: AppService) {}

  /**
   * Init
   *
   */
  ngOnInit() {

    this.id = localStorage.getItem('site_id');
    this.role = localStorage.getItem('site_role');
    this.addVisible = false;
    this.editVisible = false;
    this.removeVisible = false;
    this.selectVisible = false;
    this.removeImageVisible = false;
    this.drawerVisible = false;
    this.overflowVisible = false;
    this.galleries = [];
    this.images = [];
    this.selectedGallery = null;
    this.selectedImage = null;

    this.list('load');

  }

  /**
   * Updates the list
   */
  list(source:string) {

    if(source != 'load') {
      this._appService.showToast('success', null);
    }

    this.reset();

    this._galleryService.list()
                     .subscribe(
                      (data: any) => { this.galleries = data; this.success(); },
                       error =>  { this.failure(<any>error); }
                      );

  }

  /**
   * handles the list successfully updated
   */
  success () {

    var x, flag = false;

    // check if selected gallery is set
    if(this.galleries.length > 0 && this.galleries != undefined) {

      if(this.selectedGallery !== undefined && this.selectedGallery !== null) {
        for(x=0; x<this.galleries.length; x++) {
          if(this.galleries[x].id === this.selectedGallery.id) {
            flag = true;
          }
        }
      }

      // check if id is in array
      if(flag === false) {
        this.selectedGallery = this.galleries[0];
      }

    }

    // update images
    if(this.selectedGallery !== null) {
      this.listImages();
    }

  }

  /**
   * list images for the gallery
   */
  listImages() {

    this._galleryImageService.list(this.selectedGallery.id)
                     .subscribe(
                      (data: any) => { this.images = data; },
                       error => { this.failure(<any>error); }
                      );

  }

  /**
   * Resets screen
   */
  reset() {
    this.addVisible = false;
    this.editVisible = false;
    this.removeVisible = false;
    this.selectVisible = false;
    this.removeImageVisible = false;
    this.editImageVisible = false;
    this.drawerVisible = false;
    this.overflowVisible = false;
  }

  /**
   * Sets the gallery to active
   *
   * @param {Gallery} gallery
   */
  setActive(gallery) {
    this.selectedGallery = gallery;

    this.listImages();
  }

  /**
   * Sets the image to active
   *
   * @param {Image} image
   */
  setImageActive(image) {
    this.selectedImage = image;
    this.selectedIndex = this.images.indexOf(image);
  }

  /**
   * Shows the drawer
   */
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  /**
   * Shows the overflow menu
   */
  toggleOverflow() {
    this.overflowVisible = !this.overflowVisible;
  }

  /**
   * Shows the add dialog
   */
  showAdd() {
    this.addVisible = true;
  }

  /**
   * Shows the edit dialog
   */
  showEdit() {
    this.editVisible = true;
  }

  /**
   * Shows the remove dialog
   *
   */
  showRemove() {
    this.removeVisible = true;
  }

  /**
   * Shows the select dialog
   */
  showSelect() {
    this.selectVisible = true;
  }

  /**
   * Handles the selection of an image
   */
  select(event) {

   var caption = '';

   this._galleryImageService.add(event.name, event.url, event.thumb, caption, this.selectedGallery.id)
                   .subscribe(
                    (data: any) => { this.listImages(); this._appService.showToast('success', null); },
                     error => { this.failure(<any>error); }
                    );

    this.selectVisible = false;
  }

  /**
   * Shows the remove dialog
   *
   * @param {Image} image
   */
  showRemoveImage(image) {
    this.selectedImage = image;
    this.removeImageVisible = true;
  }

  /**
   * Shows the remove dialog
   *
   * @param {Image} image
   */
  showEditImage(image) {
    this.selectedImage = image;
    this.editImageVisible = true;
  }

  /**
   * Move the image up
   *
   * @param {Image} image
   */
  moveImageUp(image) {

    var i = this.images.indexOf(image);

    if(i != 0) {
      this.images.splice(i, 1);
      this.images.splice(i-1, 0, image);
    }

    this.updateOrder();

  }

  /**
   * Move the image down
   *
   * @param {Image} image
   */
  moveImageDown(image) {

    var i = this.images.indexOf(image);

    if(i != (this.images.length-1)) {
      this.images.splice(i, 1);
      this.images.splice(i+1, 0, image);
    }

    this.updateOrder();

  }

  /**
   * Updates the order of the field fields
   *
   */
  updateOrder() {

    this._galleryImageService.updateOrder(this.images, this.selectedGallery.id)
                     .subscribe(
                      (data: any) => { this._appService.showToast('success', 'Order updated successfully'); },
                       error =>  { this.failure(<any>error); }
                      );
  }

  /**
   * handles error
   */
  failure(obj) {

    this._appService.showToast('failure', obj.data);

    if(obj.status == 401) {
      this._router.navigate( ['/login'] );
    }

  }


}