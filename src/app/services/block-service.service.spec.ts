import { TestBed } from '@angular/core/testing';

import { BlockStoreService } from './block-store.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BlockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BlockStoreService = TestBed.get(BlockStoreService);
    expect(service).toBeTruthy();
  });
});
