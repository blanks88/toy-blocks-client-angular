import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {BehaviorSubject, forkJoin, Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { Node } from 'src/models/node.model';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class NodesStore extends Store<Node[]> {
  current$: Observable<Node>;
  private _current$: BehaviorSubject<Node>;

  constructor(private api: ApiService) {
    super(new State().list);

    this._current$ = new BehaviorSubject<Node>(null);
    this.current$ = this._current$.asObservable();
  }

  get current(): Node {
    return this._current$.getValue();
  }

  setCurrent(nextState: Node) {
    this._current$.next(nextState);
  }


  public getStatus() {
    this._getStatus().subscribe((value: any) => {
      this.setState([...value]);
    });
  }

  public _getStatus() {
    const status = this.state.map(node => {
      return this.api.get(`${node.url}/api/v1/status`).pipe(
        catchError(error =>
          of({
            node_name: false
          })
        ),
        map(({ node_name }) => {
          return { name: node_name, online: !!node_name, loading: false, url: node.url };
        })
      );
    });

    return forkJoin(status);
  }
}
