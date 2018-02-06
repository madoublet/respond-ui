import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'respond-add-block',
    templateUrl: 'add-block.component.html',
    providers: []
})

export class AddBlockComponent {

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

  constructor () {}

  /**
   * Init
   */
  ngOnInit() {

  }

  /**
   * Hides the add modal
   */
  hide() {
    this._visible = false;
    this.onCancel.emit(null);
  }

  /**
   * Adds the block
   */
  add(type: string) {
    let html = '';

    if(type == '1-column') {
      html = '<div class="block row  mt-5 mb-5">' +
          '<div class="col col-md-12"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
          '</div>';
    }
    else if(type == '2-column') {
      html = '<div class="block row  mt-5 mb-5">' +
        '<div class="col col-md-6"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' + 
        '<div class="col col-md-6"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' + 
        '</div>';
    }
    else if(type == '2-column-weighted-left') {
      html = '<div class="block row  mt-5 mb-5">' +
        '<div class="col col-md-9"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '</div>';
    }
    else if(type == '2-column-weighted-right') {
      html = '<div class="block row mt-5 mb-5">' +
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-9"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '</div>';
    }
    else if(type == '3-column') {
      html = '<div class="block row mt-5 mb-5">' +
        '<div class="col col-md-4"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-4"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-4"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '</div>';
    }
    else if(type == '4-column') {
      html = '<div class="block row mt-5 mb-5">' +
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' + 
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '<div class="col col-md-3"><h2>Cras justo odio</h2><p>Nullam id dolor id nibh</p></div>' +
        '</div>';
    }
    else if(type == 'jumbotron') {
      html = '<div class="block row jumbotron mt-5 mb-5"><div class="col col-md-12"><h1>Cras justo odio</h1><p>Nullam id dolor id nibh</p></div></div>';
    }
    else if(type == 'triple-feature') {
      html = '<div class="row center-content mt-5 mb-5">' +
      '<div class="col col-lg-4">' +
       ' <div><img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></div>' +
       '<h2>Donec ullamcorper</h2>' +
       '<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>' +
       '<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>' +
       '</div>' +
       '<!-- /.col-lg-4 -->' +
       '<div class="col col-lg-4">' +
       '<div><img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></div>' +
       '<h2>Lacinia odio sem nec elit</h2>' +
       '<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>' +
       '<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>' +
       '</div>' +
       '<!-- /.col-lg-4 -->' +
       '<div class="col col-lg-4">' +
       '<div><img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></div>' +
       '<h2>Cras justo odio</h2>' +
       '<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>' +
       '<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>' +
       '</div>' +
       '<!-- /.col-lg-4 -->' +
       '</div>';
    }
    else if(type == 'featured-image-left') { 
      html = '<div class="row featurette mt-5 mb-5">' +
        '<div class="col col-md-7">' +
        '<h2 class="featurette-heading">Donec ullamcorper. <span class="text-muted">Vestibulum id ligula porta.</span></h2>' +
        '<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>' +
        '</div>' +
        '<!-- /.col-lg-7 -->' +
        '<div class="col col-md-5">' +
        '<div><img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style="width: 500px; height: 500px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161628f3224%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161628f3224%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></div>' +
        '</div>' +
        ' <!-- /.col-lg-5 -->' +
        '</div>';
    }
    else if(type == 'featured-image-right') { 
        html = '<div class="row featurette mt-5 mb-5">' +
          '<div class="col col-md-7 order-md-2">' +
          '<h2 class="featurette-heading">Donec ullamcorper. <span class="text-muted">Vestibulum id ligula porta.</span></h2>' +
          '<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>' +
          '</div>' +
          '<!-- /.col-lg-7 -->' +
          '<div class="col col-md-5 order-md-1">' +
          '<div><img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style="width: 500px; height: 500px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161628f3224%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161628f3224%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></div>' +
          '</div>' +
          ' <!-- /.col-lg-5 -->' +
          '</div>';
    }
    
    this.onUpdate.emit({properties: {html: html}, attributes: []});
  }

}