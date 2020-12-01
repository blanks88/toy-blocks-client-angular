import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesComponent } from './nodes.component';
import {NodeComponent} from '../node/node.component';
import {StatusComponent} from '../status/status.component';
import {BlocksComponent} from '../blocks/blocks.component';
import {BlockComponent} from '../block/block.component';
import {NodesStore} from '../services/nodesStore.service';
import {BlockStoreService} from '../services/block-store.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NodesComponent', () => {
  let component: NodesComponent;
  let fixture: ComponentFixture<NodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesComponent, NodeComponent, StatusComponent, BlocksComponent, BlockComponent ],
      imports: [HttpClientTestingModule]
      // providers: [NodesStore, BlockStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
