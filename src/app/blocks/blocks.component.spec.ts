import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';
import {BlockComponent} from '../block/block.component';
import {BlockStoreService} from '../services/block-store.service';

describe('BlocksComponent', () => {
  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksComponent, BlockComponent ],
      providers: [BlockStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
