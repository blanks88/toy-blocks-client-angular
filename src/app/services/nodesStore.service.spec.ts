import { TestBed } from '@angular/core/testing';

import { NodesStore } from './nodesStore.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NodesStore', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NodesStore = TestBed.get(NodesStore);
    expect(service).toBeTruthy();
  });
});
