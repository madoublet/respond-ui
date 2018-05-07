import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class SubmissionService {
  constructor (private http: HttpClient) {}

  private _listUrl = 'api/submissions/list';
  private _removeUrl = 'api/submissions/remove';

  /**
   * Lists submissions in the application
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
   * Removes the submission
   *
   * @param {string} url
   * @return {Observable}
   */
  remove (id: string) {

    // options
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-AUTH':  'Bearer ' + localStorage.getItem('id_token')
      }),
      responseType: 'text' as 'text'};

    // data
    let data = { id };

    return this.http.post(this._removeUrl, data, options);

  }

}