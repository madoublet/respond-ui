import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ThemeService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/theme/list';
  private _editUrl = 'api/theme/edit';

  /**
   * Lists theme settings
   *
   */
  list () {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      })};

    return this.http.get(this._listUrl, options);
  }

  /**
   * Edits theme settings
   *
   * @param {array} settings
   * @return {Observable}
   */
  edit (settings) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { settings };

    return this.http.post(this._editUrl, data, options);

  }


}