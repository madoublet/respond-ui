import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileService } from '../../../../shared/services/file.service';
import { AppService } from '../../../../shared/services/app.service';

@Component({
    selector: 'respond-remove-file',
    templateUrl: 'remove-file.component.html',
    providers: [FileService, AppService]
})

export class RemoveFileComponent {

  routes;
  errorMessage;

  // model to store
  model: {
    name: '',
    url: ''
  };

  _visible: boolean = false;

  @Input()
  set visible(visible: boolean){

    // set visible
    this._visible = visible;

  }

  @Input()
  set file(file){

    // set visible
    this.model = file;

  }

  get visible() { return this._visible; }

  @Output() onCancel = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();

  constructor (private _fileService: FileService, private _appService: AppService) {}

  /**
   * Init files
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

    this._fileService.remove(this.model.name)
                     .subscribe(
                       (data: any) => { this.success(); },
                       error => { this.onError.emit(<any>error) }
                      );

  }

  /**
   * Handles a successful submission
   */
  success() {

    this._visible = false;
    this.onUpdate.emit(null);

    this._appService.showToast('success', '');

  }


}