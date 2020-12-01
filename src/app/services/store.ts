import {Observable, BehaviorSubject} from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  loading$: Observable<boolean>;
  private _loading$: BehaviorSubject<boolean>;

  error$: Observable<any>;
  private _error$: BehaviorSubject<any>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();

    this._loading$ = new BehaviorSubject<boolean>(false);
    this.loading$ = this._loading$.asObservable();

    this._error$ = new BehaviorSubject<any>(null);
    this.error$ = this._error$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  get loading(): boolean {
    return this._loading$.getValue();
  }

  get error(): any {
    return this._error$.getValue();
  }

  setState(nextState: T): void {
    this._state$.next(nextState);
  }

  setLoading(nextState: boolean): void {
    this._loading$.next(nextState);
  }

  setError(nextState: any): void {
    this._error$.next(nextState);
  }
}
