import {catchError, finalize, map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Store} from './store';
import {ApiService} from './api.service';
import {Block} from '../../models/block.model';

@Injectable({
  providedIn: 'root'
})
export class BlockStoreService extends Store<any[]> {
  constructor(private api: ApiService) {
    super([]);
  }

  public getStatus(url: string) {
    this._getStatus(url).subscribe((value: any) => {
      this.setState([...value]);
    });
  }

  public _getStatus(url: string): Observable<Block[]> {
    this.setError(null);
    this.setLoading(true);

    return this.api.get(`${url}/api/v1/blocks`).pipe(
      catchError(error => {

          this.setError(error);
          return of({data: []});
        }
      ),
      map(({data}) => data),
      finalize(() => this.setLoading(false))
    );
  }
}
